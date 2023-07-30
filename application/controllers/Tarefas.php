<?php

defined('BASEPATH') or exit('No direct script access allowed');

class Tarefas extends MY_Controller
{

    ////////////////////////////////////////
    // HOME PADRAO DE TAREFAS                     
    // CRIADO POR ELIEL FELIX
    // DATA: 27/07/2023                   
    ////////////////////////////////////////  
    public function index()
    {
        $this->load->model('M_retorno');
        $this->load->view('includes/header');
        $this->load->view('includes/menu_sup');
        $this->load->view('v_tarefas');
        $this->load->view('includes/modal');
        $this->load->view('includes/footer');
    }


    ////////////////////////////////////////
    // RETORNA DASHBOARD DE TAREFAS                 
    // CRIADO POR ELIEL FELIX 
    // DATA: 27/07/2023                   
    ////////////////////////////////////////

    public function retTarefas()
    {
        $this->load->model('M_retorno');
        $retorno = $this->M_retorno->retTarefas();
        echo json_encode($retorno);
    }


    ////////////////////////////////////////////
    // CADASTRA TAREFAS OU CABEÇALHO DE TAREFA                 
    // CRIADO POR ELIEL FELIX 
    // DATA: 30/07/2023                   
    ////////////////////////////////////////////
    public function cadTarefas()
    {
        $files = $_FILES['anexoTarefa'];
        if ($_FILES['anexoTarefa']['tmp_name'] !== '') {
            $anexo = md5($files['name']) . '.' . pathinfo($files['name'], PATHINFO_EXTENSION);
            $configuracao = array(
                "upload_path"   => "./assets/uploads/",
                'allowed_types' => 'jpg|png|gif|pdf|jpeg',
                'file_name'     => $anexo,
                'max_size'      => '500'
            );
            $this->load->library('upload');
            $this->upload->initialize($configuracao);
            if ($this->upload->do_upload('anexoTarefa')) {
            } else {
                $return = array(
                    'code' => 2,
                    'message' =>  trim($this->upload->display_errors())
                );
                echo json_encode($return);
                exit();
            }
        }

        $this->load->library('form_validation');
        if ($this->input->post('txtIdTarefa') !== '') {
            $this->form_validation->set_rules('txtNomeTarefa', 'Nome da tarefa', 'required');
            $this->form_validation->set_rules('txtDescTarefa', 'Descrição', 'required');
            $this->form_validation->set_rules('slRespTarefa', 'Responsável', 'required');
            $this->form_validation->set_rules('txtDataFimTarefa', 'Data', 'required');
            // $this->form_validation->set_rules('slAtivDepto', 'Departamento', 'required');
            // $this->form_validation->set_rules('slAtivProjeto', 'Projeto', 'required');
            // $this->form_validation->set_rules('slAtivEtapas', 'Etapa', 'required');
        } else {
            $this->form_validation->set_rules('txtNomeTarefa', 'Nome da tarefa', 'required|is_unique[tbl_user_tarefas.nome_tarefa]');
            $this->form_validation->set_rules('txtDescTarefa', 'Descrição', 'required');
            $this->form_validation->set_rules('slRespTarefa', 'Responsável', 'required');
            // $this->form_validation->set_rules('slAtivDepto', 'Departamento', 'required');
            // $this->form_validation->set_rules('slAtivProjeto', 'Projeto', 'required');
            // $this->form_validation->set_rules('slAtivEtapas', 'Etapa', 'required');
            $this->form_validation->set_rules('txtDataFimTarefa', 'Data', 'required');
        }

        if ($this->form_validation->run() == FALSE) {
            $return = array(
                'code' => 2,
                'message' => validation_errors()
            );
        } else {

            if ($this->input->post("txtIdTarefa") != '') { // SE ID DE TAREFA EXISTE É UMA EDIÇÃO DE TAREFA
                if ($_FILES['anexoTarefa']['tmp_name'] !== '') { // SE NOME TEMPORÁRIO EXISTE, HÁ ANEXO
                    $dados = array(
                        "id_tarefa" => $this->input->post("txtIdTarefa"),
                        "id_cabec" => $this->input->post("txtIdCabec"),
                        "nome_tarefa" => $this->input->post("txtNomeTarefa"),
                        "descricao" => $this->input->post("txtDescTarefa"),
                        "prioridade" => '',
                        "responsavel" => $this->input->post("slRespTarefa"),
                        "situacao" => $this->input->post("slTarefaStatus"),
                        "data_fim" => $this->input->post("txtDataFimTarefa"),
                        "anexo" => $anexo,
                        "usucria" => $this->session->userdata('id_users')
                    );
                } else {  // SE NOME TEMPORÁRIO NÃO EXISTE, NÃO HÁ ANEXO
                    $dados = array(
                        "id_tarefa" => $this->input->post("txtIdTarefa"),
                        "id_cabec" => $this->input->post("txtIdCabec"),
                        "nome_tarefa" => $this->input->post("txtNomeTarefa"),
                        "descricao" => $this->input->post("txtDescTarefa"),
                        "prioridade" => '',
                        "responsavel" => $this->input->post("slRespTarefa"),
                        "situacao" => $this->input->post("slAtivStatus"),
                        "data_fim" => $this->input->post("txtDataFimTarefa"),
                        "usucria" => $this->session->userdata('id_users')
                    );
                }
            } else { // SE ID DE TAREFA NÃO EXISTE É UM CADASTRO DE TAREFA
                $dados = array(
                    // "id_tarefa" => $this->input->post("txtIdTarefa"),
                    "id_cabec" => $this->input->post("txtIdCabec"),
                    "nome_tarefa" => $this->input->post("txtNomeTarefa"),
                    "descricao" => $this->input->post("txtDescTarefa"),
                    "prioridade" => '',
                    "responsavel" => $this->input->post("slRespTarefa"),
                    "situacao" => $this->input->post("slTarefaStatus"),
                    "data_fim" => $this->input->post("txtDataFimTarefa"),
                    "anexo" => $anexo,
                    "usucria" => $this->session->userdata('id_users')
                );

                if ($this->input->post('txtIdCabec') == '') {
                    $dados['cabec_titulo'] = $dados['nome_tarefa'];
                    unset($dados['nome_tarefa']);
                    unset($dados['id_cabec']);
                }
            }

            $this->load->model('M_insert');
            if ($this->input->post('txtIdCabec') != '') {
                $return = $this->M_insert->cadTarefas($dados);
            } else {
                $return = $this->M_insert->cadCabecTarefas($dados);
            }
        }
        echo json_encode($return);
    }
}