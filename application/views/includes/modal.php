<!-- MODAL DEPARTAMENTO -->
<div class="modal" id="ModalDepto" class="modal fade" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog">
        <div class="modal-content">
            <form method="post" id="formDepartamentos">
                <div class="modal-header">
                    <h4 class="modal-title">Departamentos</h4>
                    <button type="button" class="close" data-dismiss="modal" onclick="clearForm();">&times;</button>
                </div>
                <input class="d-none" type="number" name="txtIdDepto" id="txtIdDepto">
                <div class="modal-body p-2">
                    <div class="form-group col-12">
                        <label class="m-0">Código do departamento:</label>
                        <input type="number" class="form-control" name="txtCodDepto" id="txtCodDepto" placeholder="Código do departamento">
                    </div>

                    <div class="form-group col-12">
                        <label class="m-0">Descrição:</label>
                        <input type="text" class="form-control" name="txtDescDepto" id="txtDescDepto" placeholder="Descrição do departamento">
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-danger" data-dismiss="modal" onclick="clearForm();">Sair</button>
                    <button type="button" class="btn btn-success" id="btnDepartamentos">Salvar</button>
                </div>
            </form>
        </div>
    </div>
</div>

<!-- MODAL PROJETOS -->
<div class="modal" id="ModalProjeto" class="modal fade" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog">
        <div class="modal-content">
            <form method="post" id="formProjetos" enctype="multipart/form-data">
                <div class="modal-header">
                    <h4 class="modal-title">Projetos</h4>
                    <button type="button" class="close" data-dismiss="modal" onclick="clearForm();">&times;</button>
                </div>
                <input class="d-none" type="number" name="txtIdProjeto" id="txtIdProjeto">
                <div class="modal-body p-2">
                    <div class="form-group col-12">
                        <label class="m-0">Projetos:</label>
                        <input type="text" class="form-control" name="txtNomeProjeto" id="txtNomeProjeto" placeholder="Nome do projeto">
                    </div>

                    <div class="form-group col-12">
                        <label class="m-0">Descrição:</label>
                        <textarea type="text" class="form-control" name="txtDescProjeto" id="txtDescProjeto" placeholder="Descrição do projeto"></textarea>
                    </div>
                    <div class="form-group col-12">
                        <select id="slRespProjeto" name="slRespProjeto" class="selectpicker form-control" data-style="btn-success">
                            <option value="">Responsável</option>
                        </select>
                    </div>
                    <div class="form-group col-12">
                        <select id="slDepProjeto" name="slDepProjeto" class="selectpicker form-control" data-style="btn-success">
                            <option value="">Departamento'</option>
                        </select>
                    </div>

                    <div class="form-group col-12">
                        <label class="m-0">Data limite do projeto:</label>
                        <input type="date" class="form-control" name="txtDataFimProjeto" id="txtDataFimProjeto" placeholder="Data limite para o projeto">
                    </div>

                    <div class="form-group col-12">
                        <label class="form-label">Anexo</label>
                        <input class="form-control form-control-lg btn" id="anexoProjeto" name="anexoProjeto" name="anexoProjeto" type="file" />
                    </div>

                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-danger" data-dismiss="modal" onclick="clearForm();">Sair</button>
                    <button type="submit" class="btn btn-success" id="btnCadProjeto">Salvar</button>
                </div>
            </form>
        </div>
    </div>
</div>

<!-- MODAL ETAPAS -->
<div class="modal" id="ModalEtapas" class="modal fade" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog">
        <div class="modal-content">
            <form method="post" id="formEtapas" enctype="multipart/form-data">
                <div class="modal-header">
                    <h4 class="modal-title">Etapas</h4>
                    <button type="button" class="close" data-dismiss="modal" onclick="clearForm();">&times;</button>
                </div>
                <input type="number" name="txtIdEtapa" id="txtIdEtapa" class="d-none">
                <div class="modal-body p-2">
                    <div class="form-group col-12">
                        <label class="m-0">Etapa:</label>
                        <input type="text" class="form-control" name="txtNomeEtapa" id="txtNomeEtapa" placeholder="Nome da etapa">
                    </div>

                    <div class="form-group col-12">
                        <label class="m-0">Descrição:</label>
                        <textarea type="text" class="form-control" name="txtDescEtapa" id="txtDescEtapa" placeholder="Descrição da etapa"></textarea>
                    </div>
                    <div class="form-group col-12">
                        <label class="m-0">Data limite da etapa:</label>
                        <input type="date" class="form-control" name="txtEtaDtLimit" id="txtEtaDtLimit" placeholder="Data limite para finalização">
                    </div>
                    <div class="col-12">
                        <div class="row">
                            <div class="form-group col-6">
                                <label class="m-0">Prioridade:</label>
                                <select id="SlEtaPrioridade" name="SlEtaPrioridade" class="selectpicker form-control" data-style="btn-success">
                                    <option value="">Sequência</option>
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                    <option value="5">5</option>
                                    <option value="6">6</option>
                                    <option value="7">7</option>
                                    <option value="8">8</option>
                                    <option value="9">9</option>
                                    <option value="10">10</option>
                                </select>
                            </div>
                            <div class="form-group col-6">
                                <label class="m-0">Situação:</label>
                                <select id="SlEtapaStatus" name="SlEtapaStatus" class="selectpicker form-control" data-style="btn-success">
                                    <option value="A">Aguardando</option>
                                    <option value="P">Pendente</option>
                                    <option value="E">Exacutando</option>
                                    <option value="C">Concluída</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div class="form-group col-12">
                        <label class="m-0">Projeto:</label>
                        <select id="slEtapProjeto" name="slEtapProjeto" class="form-control selectpicker" data-style="btn-success">
                            <option value="">Projeto</option>
                        </select>
                    </div>
                    <div class="form-group col-12">
                        <label class="m-0">Responsável:</label>
                        <select id="slEtapResponsavel" name="slEtapResponsavel" class="form-control selectpicker" data-style="btn-success">
                            <option value="">Responsável</option>
                        </select>
                    </div>

                    <div class="form-group col-12 d-none">
                        <label class="form-label">Anexo</label>
                        <input class="form-control form-control-lg btn" id="anexoEtapa" name="anexoEtapa" name="anexoEtapa" type="file" />
                    </div>

                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-danger" data-dismiss="modal" onclick="clearForm();">Sair</button>
                    <button type="submit" class="btn btn-success" id="btnCadEtapas">Salvar</button>
                </div>
            </form>
        </div>
    </div>
</div>



<!-- MODAL ATIVIDADES -->
<div class="modal fade" id="ModalAtividades" class="modal fade" tabindex="-1" data-backdrop="static" data-keyboard="false">
    <div class="modal-dialog">
        <div class="modal-content">
            <form method="post" id="formAtividade" enctype="multipart/form-data">
                <div class="modal-header">
                    <h4 class="modal-title">Atividade</h4>
                    <button type="button" class="close" data-dismiss="modal" onclick="clearForm();">&times;</button>
                </div>
                <div class="modal-body p-2 row">
                    <input type="number" name="txtIdAtividade" id="txtIdAtividade" class="form-control d-none">

                    <div class="form-group col-12">
                        <label class="m-0">Departamento:</label>
                        <select id="slAtivDepto" name="slAtivDepto" class="selectpicker form-control" data-style="btn-success" onchange="selectProjetos(this.value)">
                            <option value="">Departamento</option>
                        </select>
                    </div>

                    <div class="form-group col-12">
                        <label class="m-0">Projetos:</label>
                        <select id="slAtivProjeto" name="slAtivProjeto" class="selectpicker form-control" data-style="btn-success" onchange="selectEtapas (this.value)">
                            <option value="">Projeto</option>
                        </select>
                    </div>

                    <div class="form-group col-12">
                        <label class="m-0">Etapas:</label>
                        <select id="slAtivEtapas" name="slAtivEtapas" class="selectpicker form-control" data-style="btn-success">
                            <option value="">Etapa</option>
                        </select>
                    </div>

                    <div class="form-group col-12">
                        <label class="m-0">Atividade:</label>
                        <input type="text" class="form-control" name="txtNomeAtividade" id="txtNomeAtividade" placeholder="Nome da atividade">
                    </div>

                    <div class="form-group col-12">
                        <label class="m-0">Descrição:</label>
                        <textarea type="text" class="form-control" name="txtDescAtividade" id="txtDescAtividade" placeholder="Descrição da atividade"></textarea>
                    </div>
                    <div class="form-group col-12">
                        <select id="slRespAtividade" name="slRespAtividade" class="selectpicker form-control" data-style="btn-success">
                            <option value="">Responsável</option>
                        </select>
                    </div>

                    <div class="form-group col-6">
                        <label class="m-0">Situação:</label>
                        <select id="slAtivStatus" name="slAtivStatus" class="selectpicker form-control" data-style="btn-success">
                            <option value="P">Pendente</option>
                            <option value="I">Exacutando</option>
                            <option value="C">Concluída</option>
                        </select>
                    </div>

                    <div class="form-group col-6">
                        <label class="m-0">Data limite da atividade:</label>
                        <input type="date" class="form-control" name="txtDataFimAtividade" id="txtDataFimAtividade" placeholder="Data limite para a ativivdade">
                    </div>

                    <div class="form-group col-12">
                        <label class="form-label">Anexo</label>
                        <input class="form-control form-control-lg btn" id="anexoAtividade" name="anexoAtividade" type="file" />

                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-danger" data-dismiss="modal" onclick="clearForm();">Sair</button>
                    <button type="submit" class="btn btn-success" id="btnCadAtividade">Salvar</button>
                </div>
            </form>
        </div>
    </div>

</div>



<!-- MODAL USUARIOS -->
<div class="modal fade" id="ModalUser" class="modal fade" tabindex="-1" data-backdrop="static" data-keyboard="false">
    <div class="modal-dialog">
        <div class="modal-content">
            <form method="post" id="formUser" enctype="multipart/form-data">
                <div class="modal-header">
                    <h4 class="modal-title">Usuários</h4>
                    <button type="button" class="close" data-dismiss="modal" onclick="clearForm();">&times;</button>
                </div>
                <div class="modal-body p-2 row">
                    <input type="number" name="txtIdUser" id="txtIdUser" class="form-control d-none">

                    <div class="form-group col-12">
                        <label class="m-0">Nome:</label>
                        <input type="text" class="form-control" name="txtNomeUser" id="txtNomeUser" placeholder="Nome do usuário">
                    </div>

                    <div class="form-group col-12">
                        <label class="m-0">Email:</label>
                        <input type="text" class="form-control" name="txtEmailUser" id="txtEmailUser" placeholder="Email do usuário">
                    </div>

                    <div class="form-group col-12">
                        <label class="m-0">Senha:</label>
                        <input type="text" class="form-control" name="txtSenhaUser" id="txtSenhaUser" placeholder="********">
                    </div>

                    <div class="form-group col-12">
                        <label class="m-0">Confirma a senha:</label>
                        <input type="text" class="form-control" name="txtConfirmaSenhaUser" id="txtConfirmaSenhaUser" placeholder="********">
                    </div>

                    <div class="form-group col-12">
                        <label class="m-0">Nivel:</label>
                        <select id="slNivelUser" name="slNivelUser" class="selectpicker form-control" data-style="btn-success">
                        <option value="">Selecione o nível</option>
                            <option value="1">Administrador</option>
                            <option value="2">Usuário</option>
                        </select>
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-danger" data-dismiss="modal" onclick="clearForm();">Sair</button>
                    <button type="submit" class="btn btn-success" id="btnUser">Salvar</button>
                </div>
            </form>
        </div>
    </div>

</div>



<!-- MODAL VIEW ANEXO -->
<div class="modal fade" id="modalAnexo" class="modal fade" tabindex="-1" data-keyboard="false">
    <div class="modal-dialog">
        <div class="modal-content">
            <div class="modal-header">
                <h4 class="modal-title">Atividade</h4>
                <button type="button" class="close" data-dismiss="modal">&times;</button>
            </div>
            <div class="modal-body p-2">
                <div id="docAnexoView"></div>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-danger" data-dismiss="modal" onclick="clearForm();">Sair</button>
            </div>
        </div>
    </div>
</div>

<!-- ALTERAR SITUAÇÃO -->
<div class="modal fade" id="modalAltSituacao" class="modal fade" tabindex="-1" data-keyboard="false" data-backdrop="static">
    <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
            <div class="modal-header">
                <h4 class="modal-title">Alterar Situação</h4>
                <button type="button" class="close" data-dismiss="modal">&times;</button>
            </div>
            <div class="modal-body p-2">
                <form method="post" id="formAltSituacao">
                    <div class="row">
                        <div class="col-12 form-group">
                            <select name="slAltSituacao" id="slAltSituacao" class="selectpicker form-control" data-style="btn-success">
                                <option value="A">Aguardando</option>
                                <option value="P">Pendente</option>
                                <option value="I">Iniciada</option>
                                <option value="E">Executando</option>
                                <option value="C">Concluída</option>
                            </select>
                        </div>

                        <div class="form-group col-12">
                            <label class="m-0">Descrição:</label>
                            <textarea type="text" class="form-control" id="txtLogDescAtividade" name="txtLogDescAtividade" placeholder="Descrição da atividade"></textarea>
                        </div>

                        <div class="form-group col-12">
                            <label class="form-label">Anexo</label>
                            <input class="form-control form-control-lg btn" id="anexoLogAtividade" name="anexoLogAtividade" type="file" />
                        </div>

                    </div>
                </form>
            </div>

            <div class="modal-footer">
                <button type="button" class="btn btn-success" onclick="altsituacao($('#txtIdAtividade').val())">Alterar</button>
                <button type="button" class="btn btn-danger" data-dismiss="modal">Sair</button>
            </div>
        </div>
    </div>
</div>