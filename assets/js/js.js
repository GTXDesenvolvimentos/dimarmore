// SINALIZA SE É UMA EDIÇÃO DE CABEÇALHO DE TAREFA (PAINEL)
flagEditCabec = false;

// FUNÇÃO arrayColumn DO PHP PARA JAVASCRIPT
const arrayColumn = (array, column) => {
    return array.map(item => parseInt(item[column]));
};

////////////////////////////////////////
// FUNÇÃO DE LOGAR APERTANDO ENTER                  
// CRIADO POR MARCIO SILVA            
// DATA: 09/02/2023                   
////////////////////////////////////////

$('#txtPassword').keyup(() => {
    if (event.key == 'Enter') {
        $('#btnLogin').click();
    }
})

////////////////////////////////////////
// FUNÇOES GLOBAIS                    
// CRIADO POR MARCIO SILVA            
// DATA: 09/02/2023                   
////////////////////////////////////////
function clearForm() {
    $('#formDepartamentos').trigger('reset');
    $('#formProjetos').trigger('reset');
    $('#formUser').trigger('reset');
    $('#formEtapas').trigger('reset');
    $('#formAtividade').trigger('reset');
    $('#formTarefa').trigger('reset');
    $(".selectpicker").selectpicker("refresh");
    $('#ModalDepto').modal('hide');
    $('#ModalProjeto').modal('hide');
    $('#ModalEtapas').modal('hide');
    $('#ModalAtividades ').modal('hide');
    $('#ModalUser').modal('hide');
    $('#ModalTarefas').modal('hide');

    if (typeof (flagEditCabec) != 'undefined') {
        flagEditCabec = false;
    }

    // SE ESTIVER NA DASH DE ATIVIDADES ATUALIZA O PAINEL
    if (myarr[myarr.length - 1] == 'dash') {
        retDashboard();
    }
}

//==================================================================

////////////////////////////////////////
// FUNÇÃO DE LOGIN                  
// CRIADO POR MARCIO SILVA            
// DATA: 09/02/2023                   
////////////////////////////////////////
$(document).ready(function () {
    $('#btnLogin').click(function (e) {
        e.preventDefault();
        var serializeDados = $('#formLogin').serialize();
        $.ajax({
            url: base_url + "/login/login",
            data: serializeDados,
            type: 'POST',
            dataType: "json",
            cache: false,
            beforeSend: function () {
                swal.fire({
                    title: "Aguarde!",
                    text: "Logando no sistema...",
                    imageUrl: base_url + "/assets/img/gifs/loader.gif",
                    showConfirmButton: false
                });
            },

            success: function (data) {
                if (data.code == 2) {
                    swal.fire({
                        title: "Atenção!",
                        html: data.message,
                        icon: 'info',
                        showConfirmButton: false
                    });
                } else if (data.code == 0) {
                    swal.fire("Atenção!", data.message, "warning");
                } else {
                    window.location.href = base_url;
                }
            },
            error: function (xhr, er) {
                swal.fire("Atenção!", "Ocorreu um erro ao retornar os dados!", "error");
            }
        });
    });
});
//==================================================================

////////////////////////////////////////
// FUNÇÃO CAD E ALTERAR DEPARTAMENTOS                  
// CRIADO POR MARCIO SILVA            
// DATA: 09/02/2023                   
////////////////////////////////////////
$(document).ready(function () {
    $('#btnUser').click(function (e) {
        e.preventDefault();
        var serializeDados = $('#formUser').serialize();
        $.ajax({
            url: base_url + "/usuarios/cadUser",
            data: serializeDados,
            type: 'POST',
            dataType: "json",
            cache: false,
            beforeSend: function () {
                swal.fire({
                    title: "Aguarde!",
                    text: "Validando os dados...",
                    imageUrl: base_url + "/assets/img/gifs/loader.gif",
                    showConfirmButton: false
                });
            },
            success: function (data) {

                console.log(data);
                if (data.code == 2) {
                    swal.fire({
                        title: "Atenção!",
                        html: data.message,
                        icon: 'info',
                        confirmButtonColor: '#0b475a',
                        confirmButtonText: 'Voltar'
                    });
                } else if (data.code == 0) {
                    swal.fire("Atenção!", data.message, "warning");
                } else if (data.code == 1) {
                    clearForm();
                    $('#tableUsers').bootstrapTable('refresh');
                    Swal.fire({
                        title: 'Sucesso!',
                        text: data.message,
                        icon: 'success',
                        confirmButtonColor: '#268917',
                        confirmButtonText: 'Sair'
                    });
                }
            },
            error: function (xhr, er) {
                swal.fire("Atenção!", "Ocorreu um erro ao retornar os dados!", "error");
            }
        });
    });

    // document.getElementById('formEtapas')
});
//==================================================================

////////////////////////////////////////
// FUNÇÃO CAD E ALTERAR DEPARTAMENTOS                  
// CRIADO POR MARCIO SILVA            
// DATA: 09/02/2023                   
////////////////////////////////////////
$(document).ready(function () {
    $('#btnDepartamentos').click(function (e) {
        e.preventDefault();
        var serializeDados = $('#formDepartamentos').serialize();
        $.ajax({
            url: base_url + "/deptos/cadDepto",
            data: serializeDados,
            type: 'POST',
            dataType: "json",
            cache: false,
            beforeSend: function () {
                swal.fire({
                    title: "Aguarde!",
                    text: "Validando os dados...",
                    imageUrl: base_url + "/assets/img/gifs/loader.gif",
                    showConfirmButton: false
                });
            },
            success: function (data) {

                console.log(data);
                if (data.code == 2) {
                    swal.fire({
                        title: "Atenção!",
                        html: data.message,
                        icon: 'info',
                        confirmButtonColor: '#0b475a',
                        confirmButtonText: 'Voltar'
                    });
                } else if (data.code == 0) {
                    swal.fire("Atenção!", data.message, "warning");
                } else if (data.code == 1) {
                    clearForm();
                    $('#tableDepto').bootstrapTable('refresh');
                    Swal.fire({
                        title: 'Sucesso!',
                        text: data.message,
                        icon: 'success',
                        confirmButtonColor: '#268917',
                        confirmButtonText: 'Sair'
                    });
                }
            },
            error: function (xhr, er) {
                swal.fire("Atenção!", "Ocorreu um erro ao retornar os dados!", "error");
            }
        });
    });

    // document.getElementById('formEtapas')
});
//==================================================================

////////////////////////////////////////
// FUNÇÃO CAD E ALTERAR PROJETOS           
// CRIADO POR MARCIO SILVA            
// DATA: 09/02/2023                   
////////////////////////////////////////
$(document).ready(function () {
    $('#formProjetos').submit(function (e) {
        e.preventDefault()
        var serializeDados = $('#formProjetos').serialize()
        $.ajax({
            url: base_url + 'projetos/cadProjeto',
            dataType: 'json',
            type: 'POST',
            data: new FormData(this),
            processData: false,
            contentType: false,
            beforeSend: function () {
                swal.fire({
                    title: "Aguarde!",
                    text: "Validando os dados...",
                    imageUrl: base_url + "/assets/img/gifs/loader.gif",
                    showConfirmButton: false
                });
            },
            success: function (data) {
                console.log(data);
                if (data.code == 2) {
                    swal.fire({
                        title: "Atenção!",
                        html: data.message,
                        icon: 'info',
                        confirmButtonColor: '#0b475a',
                        confirmButtonText: 'Voltar'
                    });
                } else if (data.code == 0) {
                    swal.fire("Atenção!", data.message, "warning");
                } else if (data.code == 1) {

                    clearForm();
                    $('#tableProjeto').bootstrapTable('refresh');
                    Swal.fire({
                        title: 'Sucesso!',
                        text: data.message,
                        icon: 'success',
                        confirmButtonColor: '#268917',
                        confirmButtonText: 'Sair'
                    });
                }

            },
            error: function (xhr, er) {

            }
        })
    })
});

//==================================================================

////////////////////////////////////////
// FUNÇÃO CAD E ALTERAR ETAPAS                 
// CRIADO POR MARCIO SILVA            
// DATA: 09/02/2023                   
////////////////////////////////////////
$(document).ready(function () {
    $('#formEtapas').submit(function (e) {
        e.preventDefault()
        var serializeDados = $('#formEtapas').serialize()
        $.ajax({
            url: base_url + 'etapas/cadEtapa',
            dataType: 'json',
            type: 'POST',
            data: new FormData(this),
            processData: false,
            contentType: false,
            beforeSend: function () {
                swal.fire({
                    title: "Aguarde!",
                    text: "Validando os dados...",
                    imageUrl: base_url + "/assets/img/gifs/loader.gif",
                    showConfirmButton: false
                });
            },
            success: function (data) {
                console.log(data);
                if (data.code == 2) {
                    swal.fire({
                        title: "Atenção!",
                        html: data.message,
                        icon: 'info',
                        confirmButtonColor: '#0b475a',
                        confirmButtonText: 'Voltar'
                    });
                } else if (data.code == 0) {
                    swal.fire("Atenção!", data.message, "warning");
                } else if (data.code == 1) {
                    clearForm();
                    $('#tableEtapa').bootstrapTable('refresh');
                    Swal.fire({
                        title: 'Sucesso!',
                        text: data.message,
                        icon: 'success',
                        confirmButtonColor: '#268917',
                        confirmButtonText: 'Sair'
                    });
                }

            },
            error: function (xhr, er) {

            }
        });
    });
});
//==================================================================

////////////////////////////////////////
// FUNÇÃO CAD E ALTERAR ATIVIDADES       
// CRIADO POR MARCIO SILVA            
// DATA: 09/02/2023                   
////////////////////////////////////////
$(document).ready(function () {
    $('#formAtividade').submit(function (e) {
        e.preventDefault()
        var serializeDados = $('#formAtividade').serialize()
        $.ajax({
            url: base_url + 'atividades/cadAtividades',
            dataType: 'json',
            type: 'POST',
            data: new FormData(this),
            processData: false,
            contentType: false,
            beforeSend: function () {
                swal.fire({
                    title: "Aguarde!",
                    text: "Validando os dados...",
                    imageUrl: base_url + "/assets/img/gifs/loader.gif",
                    showConfirmButton: false
                });
            },
            success: function (data) {
                console.log(data);
                if (data.code == 2) {
                    swal.fire({
                        title: "Atenção!",
                        html: data.message,
                        icon: 'info',
                        confirmButtonColor: '#0b475a',
                        confirmButtonText: 'Voltar'
                    });
                } else if (data.code == 0) {
                    swal.fire("Atenção!", data.message, "warning");
                } else if (data.code == 1) {
                    clearForm();
                    $('#tableAtividades').bootstrapTable('refresh');
                    Swal.fire({
                        title: 'Sucesso!',
                        text: data.message,
                        icon: 'success',
                        confirmButtonColor: '#268917',
                        confirmButtonText: 'Sair'
                    });
                }

            },
            error: function (xhr, er) {

            }
        });
    });
});

////////////////////////////////////////
// FUNÇÃO CAD E ALTERAR TAREFA       
// CRIADO POR ELIEL FELIX          
// DATA: 29/07/2023                   
////////////////////////////////////////
$(document).ready(function () {
    $('#formTarefa').submit(function (e) {
        e.preventDefault()

        form = new FormData(this);
        form.append('flagEditCabec', flagEditCabec);

        $.ajax({
            url: base_url + 'tarefas/cadTarefas',
            dataType: 'json',
            type: 'POST',
            data: form,
            processData: false,
            contentType: false,
            beforeSend: function () {
                swal.fire({
                    title: "Aguarde!",
                    text: "Validando os dados...",
                    imageUrl: base_url + "/assets/img/gifs/loader.gif",
                    showConfirmButton: false
                });
            },
            success: function (data) {
                // console.log(data);
                if (data.code == 2) {
                    swal.fire({
                        title: "Atenção!",
                        html: data.message,
                        icon: 'info',
                        confirmButtonColor: '#0b475a',
                        confirmButtonText: 'Voltar'
                    });
                } else if (data.code == 0) {
                    swal.fire("Atenção!", data.message, "warning");
                } else if (data.code == 1) {
                    clearForm();

                    Swal.fire({
                        title: 'Sucesso!',
                        text: data.message,
                        icon: 'success',
                        confirmButtonColor: '#268917',
                        confirmButtonText: 'Sair',
                        preConfirm: false,
                        allowOutsideClick: false,
                        allowEscapeKey: false
                    }).then((result) => {
                        if (result.isConfirmed) {
                            retTarefas();
                        }
                    });
                }

            },
            error: function (xhr, er) {

            }
        });
    });
});
//==================================================================

////////////////////////////////////////
// FUNÇÃO DELETA DEPARTAMENTOS                  
// CRIADO POR MARCIO SILVA            
// DATA: 09/02/2023                   
////////////////////////////////////////
function delDepto(value) {
    Swal.fire({
        title: 'Atenção!',
        text: "Deseja realmente deletar o deparatamento?",
        icon: 'question',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Sim, quero deletar',
        cancelButtonText: 'Não, voltar'
    }).then((result) => {
        if (result.isConfirmed) {
            $.ajax({
                url: base_url + "/deptos/delDepto",
                data: {
                    id_departamento: value
                },
                type: 'POST',
                dataType: "json",
                cache: false,
                beforeSend: function () {
                    swal.fire({
                        title: "Aguarde!",
                        text: "Validando os dados...",
                        imageUrl: base_url + "/assets/img/gifs/loader.gif",
                        showConfirmButton: false
                    });
                },
                success: function (data) {
                    console.log(data);
                    if (data.code == 2) {
                        swal.fire({
                            title: "Atenção!",
                            html: data.message,
                            icon: 'info',
                            confirmButtonColor: '#0b475a',
                            confirmButtonText: 'Voltar'
                        });
                    } else if (data.code == 0) {
                        swal.fire("Atenção!", data.message, "warning");
                    } else if (data.code == 1) {

                        clearForm();
                        $('#tableDepto').bootstrapTable('refresh');
                        Swal.fire({
                            title: 'Sucesso!',
                            text: data.message,
                            icon: 'success',
                            confirmButtonColor: '#268917',
                            confirmButtonText: 'Sair'
                        });
                    }
                },
                error: function (xhr, er) {
                    swal.fire("Atenção!", "Ocorreu um erro ao retornar os dados!", "error");
                }
            });
        }
    })
}


////////////////////////////////////////
// FUNÇÃO DELETA USUARIOS     
// CRIADO POR MARCIO SILVA            
// DATA: 09/02/2023                   
////////////////////////////////////////
function delUser(value) {
    Swal.fire({
        title: 'Atenção!',
        text: "Deseja realmente deletar o usuário?",
        icon: 'question',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Sim, quero deletar',
        cancelButtonText: 'Não, voltar'
    }).then((result) => {
        if (result.isConfirmed) {
            $.ajax({
                url: base_url + "/usuarios/delUser",
                data: {
                    txtIdUser: value
                },
                type: 'POST',
                dataType: "json",
                cache: false,
                beforeSend: function () {
                    swal.fire({
                        title: "Aguarde!",
                        text: "Validando os dados...",
                        imageUrl: base_url + "/assets/img/gifs/loader.gif",
                        showConfirmButton: false
                    });
                },
                success: function (data) {
                    console.log(data);
                    if (data.code == 2) {
                        swal.fire({
                            title: "Atenção!",
                            html: data.message,
                            icon: 'info',
                            confirmButtonColor: '#0b475a',
                            confirmButtonText: 'Voltar'
                        });
                    } else if (data.code == 0) {
                        swal.fire("Atenção!", data.message, "warning");
                    } else if (data.code == 1) {

                        clearForm();
                        $('#tableUsers').bootstrapTable('refresh');
                        Swal.fire({
                            title: 'Sucesso!',
                            text: data.message,
                            icon: 'success',
                            confirmButtonColor: '#268917',
                            confirmButtonText: 'Sair'
                        });
                    }
                },
                error: function (xhr, er) {
                    swal.fire("Atenção!", "Ocorreu um erro ao retornar os dados!", "error");
                }
            });
        }
    })
}


////////////////////////////////////////
// FUNÇÃO DELETA PROJETO              
// CRIADO POR MARCIO SILVA            
// DATA: 09/02/2023                   
////////////////////////////////////////
function delProjeto(value) {
    Swal.fire({
        title: 'Atenção!',
        text: "Deseja realmente deletar o projeto?",
        icon: 'question',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Sim, quero deletar',
        cancelButtonText: 'Não, voltar'
    }).then((result) => {
        if (result.isConfirmed) {
            $.ajax({
                url: base_url + "/projetos/delProjeto",
                data: {
                    id_projeto: value
                },
                type: 'POST',
                dataType: "json",
                cache: false,
                beforeSend: function () {
                    swal.fire({
                        title: "Aguarde!",
                        text: "Validando os dados...",
                        imageUrl: base_url + "/assets/img/gifs/loader.gif",
                        showConfirmButton: false
                    });
                },
                success: function (data) {
                    console.log(data);
                    if (data.code == 2) {
                        swal.fire({
                            title: "Atenção!",
                            html: data.message,
                            icon: 'info',
                            confirmButtonColor: '#0b475a',
                            confirmButtonText: 'Voltar'
                        });
                    } else if (data.code == 0) {
                        swal.fire("Atenção!", data.message, "warning");
                    } else if (data.code == 1) {

                        clearForm();
                        $('#tableProjeto').bootstrapTable('refresh');
                        Swal.fire({
                            title: 'Sucesso!',
                            text: data.message,
                            icon: 'success',
                            confirmButtonColor: '#268917',
                            confirmButtonText: 'Sair'
                        });
                    }
                },
                error: function (xhr, er) {
                    swal.fire("Atenção!", "Ocorreu um erro ao retornar os dados!", "error");
                }
            });
        }
    })
}

////////////////////////////////////////
// FUNÇÃO DELETA DEPARTAMENTOS                  
// CRIADO POR MARCIO SILVA            
// DATA: 09/02/2023                   
////////////////////////////////////////
function delEtapas(value) {
    Swal.fire({
        title: 'Atenção!',
        text: "Deseja realmente deletar o etapa?",
        icon: 'question',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Sim, quero deletar',
        cancelButtonText: 'Não, voltar'
    }).then((result) => {
        if (result.isConfirmed) {
            $.ajax({
                url: base_url + "/Etapas/delEtapa",
                data: {
                    id_etapa: value
                },
                type: 'POST',
                dataType: "json",
                cache: false,
                beforeSend: function () {
                    swal.fire({
                        title: "Aguarde!",
                        text: "Validando os dados...",
                        imageUrl: base_url + "/assets/img/gifs/loader.gif",
                        showConfirmButton: false
                    });
                },
                success: function (data) {
                    console.log(data);
                    if (data.code == 2) {
                        swal.fire({
                            title: "Atenção!",
                            html: data.message,
                            icon: 'info',
                            confirmButtonColor: '#0b475a',
                            confirmButtonText: 'Voltar'
                        });
                    } else if (data.code == 0) {
                        swal.fire("Atenção!", data.message, "warning");
                    } else if (data.code == 1) {

                        clearForm();
                        $('#tableEtapa').bootstrapTable('refresh');
                        Swal.fire({
                            title: 'Sucesso!',
                            text: data.message,
                            icon: 'success',
                            confirmButtonColor: '#268917',
                            confirmButtonText: 'Sair'
                        });
                    }
                },
                error: function (xhr, er) {
                    swal.fire("Atenção!", "Ocorreu um erro ao retornar os dados!", "error");
                }
            });
        }
    })
}

////////////////////////////////////////
// MONTA SELECT DE USUARIOS                 
// CRIADO POR MARCIO SILVA            
// DATA: 09/02/2023                   
////////////////////////////////////////
function selectUsers() {
    $.ajax({
        url: base_url + "Usuarios/retUsers",
        type: 'POST',
        dataType: "json",
        cache: false,
        error: function () {
            swal.fire("Atenção!", "Ocorreu um erro ao retornar os dados!", "error");
        },
        beforeSend: function () {
            swal.fire({
                title: "Aguarde!",
                text: "Validando os dados...",
                imageUrl: base_url + "/assets/img/gifs/loader.gif",
                showConfirmButton: false
            });
        },
        success: function (result) {
            $('#slEtapResponsavel, #slEtapResponsavel, #slRespAtividade, #slRespTarefa').prop('disabled', false);
            $('#slEtapResponsavel, #slEtapResponsavel, #slRespAtividade, #slRespTarefa').selectpicker('refresh');
            $('#slEtapResponsavel, #slEtapResponsavel, #slRespAtividade, #slRespTarefa').html('');
            $('#slEtapResponsavel, #slEtapResponsavel, #slRespAtividade, #slRespTarefa').append('<option value=""> Responsável </option>');

            var jsonData1 = JSON.stringify(result);
            $.each(JSON.parse(jsonData1), function (idx, obj) {
                $('#slResponsavel, #slRespProjeto, #slEtapResponsavel, #slRespAtividade, #slRespTarefa').append('<option value="' + obj.id_users + '">' + obj.nome + '</option>').selectpicker('refresh');
            });
            swal.fire({
                timer: 1,
                title: "Aguarde!",
                text: "Validando os dados...",
                imageUrl: base_url + "/assets/img/gifs/loader.gif",
                showConfirmButton: false
            });
        }
    });

}

//==================================================================

////////////////////////////////////////
// MONTA SELECT DE DEPARTAMENTOS                 
// CRIADO POR MARCIO SILVA            
// DATA: 09/02/2023                   
////////////////////////////////////////
function selectDepto() {
    $.ajax({
        url: base_url + "deptos/retDepto",
        type: 'POST',
        dataType: "json",
        cache: false,
        error: function () {
            swal.fire("Atenção!", "Ocorreu um erro ao retornar os dados!", "error");
        },
        beforeSend: function () {
            swal.fire({
                title: "Aguarde!",
                text: "Validando os dados...",
                imageUrl: base_url + "/assets/img/gifs/loader.gif",
                showConfirmButton: false
            });
        },
        success: function (result) {
            $('#slDepProjeto,#slAtivDepto').prop('disabled', false);
            $('#slDepProjeto,#slAtivDepto').selectpicker('refresh');
            $('#slDepProjeto,#slAtivDepto').html('');
            $('#slDepProjeto,#slAtivDepto').append('<option value="">Departamentos</option>');
            var jsonData1 = JSON.stringify(result);
            $.each(JSON.parse(jsonData1), function (idx, obj) {
                $('#slDepProjeto,#slAtivDepto').append('<option value="' + obj.id_departamento + '">' + obj.descricao + '</option>').selectpicker('refresh');
            });
            swal.fire({
                timer: 1,
                title: "Aguarde!",
                text: "Validando os dados...",
                imageUrl: base_url + "/assets/img/gifs/loader.gif",
                showConfirmButton: false
            });
        }
    });

}

////////////////////////////////////////
// MONTA SELECT DE PROJETOS                 
// CRIADO POR MARCIO SILVA            
// DATA: 09/02/2023                   
////////////////////////////////////////
function selectProjetos(value, opt) {
    $.ajax({
        url: base_url + "projetos/retAllProjects",
        type: 'POST',
        data: { id_departamento: value },
        dataType: "json",
        cache: false,
        error: function () {
            swal.fire("Atenção!", "Ocorreu um erro ao retornar os dados!", "error");
        },
        beforeSend: function () {
            swal.fire({
                title: "Aguarde!",
                text: "Validando os dados...",
                imageUrl: base_url + "/assets/img/gifs/loader.gif",
                showConfirmButton: false
            });
        },
        success: function (result) {
            $('#slEtapProjeto, #slAtivProjeto').prop('disabled', false);
            $('#slEtapProjeto, #slAtivProjeto').selectpicker('refresh');
            $('#slEtapProjeto, #slAtivProjeto').html('');
            $('#slEtapProjeto, #slAtivProjeto').append('<option value="">Projetos</option>');
            var jsonData1 = JSON.stringify(result);
            $.each(JSON.parse(jsonData1), function (idx, obj) {
                $('#slEtapProjeto, #slAtivProjeto').append('<option value="' + obj.id_projeto + '">' + obj.nomeProjeto + '</option>').selectpicker('refresh');
            });
            swal.fire({
                timer: 1,
                title: "Aguarde!",
                text: "Validando os dados...",
                imageUrl: base_url + "/assets/img/gifs/loader.gif",
                showConfirmButton: false
            });

            if (typeof ($('#txtIdAtividade').val()) != 'undefined' && $('#txtIdAtividade').val() != '') {
                $('#slAtivProjeto').selectpicker('val', opt.projeto)
                selectEtapas(opt.projeto, opt.etapa);
            }
        }

    });
}

////////////////////////////////////////
// MONTA SELECT DE ETAPAS                 
// CRIADO POR MARCIO SILVA            
// DATA: 09/02/2023                   
////////////////////////////////////////
function selectEtapas(value, etapa) {
    $.ajax({
        url: base_url + "etapas/retEtapas",
        type: 'POST',
        data: { id_projeto: value },
        dataType: "json",
        cache: false,
        error: function () {
            swal.fire("Atenção!", "Ocorreu um erro ao retornar os dados!", "error");
        },
        beforeSend: function () {
            swal.fire({
                title: "Aguarde!",
                text: "Validando os dados...",
                imageUrl: base_url + "/assets/img/gifs/loader.gif",
                showConfirmButton: false
            });
        },
        success: function (result) {
            $('#slAtivEtapas,#slAtivEtapas').prop('disabled', false);
            $('#slAtivEtapas,#slAtivEtapas').selectpicker('refresh');
            $('#slAtivEtapas,#slAtivEtapas').html('');
            $('#slAtivEtapas,#slAtivEtapas').append('<option value="">Etapas</option>');
            var jsonData1 = JSON.stringify(result);
            $.each(JSON.parse(jsonData1), function (idx, obj) {
                $('#slAtivEtapas,#slAtivEtapas').append('<option value="' + obj.id_etapa + '">' + obj.nomeEtapa + '</option>').selectpicker('refresh');
            });
            swal.fire({
                timer: 1,
                title: "Aguarde!",
                text: "Validando os dados...",
                imageUrl: base_url + "/assets/img/gifs/loader.gif",
                showConfirmButton: false
            });

            if (typeof ($('#txtIdAtividade').val()) != 'undefined' && $('#txtIdAtividade').val() != '') {
                $('#slAtivEtapas').selectpicker('val', etapa)
            }
        }
    });

}

function viewAnexo(value) {
    if (value != '') {
        return '<buttom class="btn btn-outline-primary btn-sm" onclick="modalAnexo(\'' + value + '\');"><i class="fa-regular fa-images"></i></button';
    }
}

function modalAnexo(value) {
    if (myarr[4] == 'tarefas') {
        $('#anexo_titulo').text('Tarefa');
    }
    $('#docAnexoView').html('<embed id="docAnexoView" src="' + base_url + '/assets/uploads/' + value + '" frameborder="0" width="100%" height="400px">');
    $('#modalAnexo').modal('show');
}

function prioridade(value) {
    if (value == 'P') {
        return '<button class="btn btn-sm btn-primary btn-block">Padrão</button>';
    } else if (value == 'M') {
        return '<button class="btn btn-sm btn-warning btn-block">Média</button>';
    } else if (value == 'A') {
        return '<button class="btn btn-sm btn-danger btn-block">Alta</button>';
    }
}

function sequencia(value) {

    return '<button class="btn btn-sm btn-outline-dark px-3">' + value + '</button>';
}

function situacao(value) {
    if (value == 'A') {
        return '<button class="btn btn-sm btn-outline-dark btn-block" data-toggle="modal" data-target="#modalAltSituacao">Aguardando</button>';
    } else if (value == 'P') {
        return '<button class="btn btn-sm btn-outline-danger btn-block" data-toggle="modal" data-target="#modalAltSituacao">Pendente</button>';
    } else if (value == 'E') {
        return '<button class="btn btn-sm btn-outline-warning btn-block" data-toggle="modal" data-target="#modalAltSituacao">Executando</button>';
    } else if (value == 'C') {
        return '<button class="btn btn-sm btn-outline-success btn-block" data-toggle="modal" data-target="#modalAltSituacao">Concluida</button>';
    } else if (value == 'I') {
        return '<button class="btn btn-sm btn-outline-primary btn-block" data-toggle="modal" data-target="#modalAltSituacao">Iniciada</button>';
    }
}

//Loading the variable
var subURL = window.location.href;
var myarr = subURL.split("/");

if (myarr[5] == 'projetos') {
    selectDepto();
    selectUsers();
} else if (myarr[5] == 'etapas') {
    selectUsers();
    selectProjetos();
} else if (myarr[5] == 'atividades') {
    selectDepto();
    selectUsers();
} else if (myarr[5] == '') {
    retDashboard();
    selectDepto();
    selectUsers();
    selectProjetos();
} else if (myarr[4] == 'dash') {
    retDashboard();
    selectDepto();
    selectUsers();
    selectProjetos();
} else if (myarr[4] == 'tarefas') {
    // retDashboard();
    // selectDepto();
    retTarefas();
    selectUsers();
    // selectProjetos();
}

function altsituacao(id_atividade) {

    dados = new FormData($('#formAltSituacao')[0]);
    dados.append("id_atividade", id_atividade);

    $.ajax({
        url: base_url + "atividades/altsituacao",
        type: 'POST',
        data: dados, //+ '&id_atividade=' + id_atividade,
        dataType: "json",
        processData: false,
        contentType: false,
        cache: false,
        error: function () {
            swal.fire("Atenção!", "Ocorreu um erro ao tentar registrar os dados!", "error");
        },
        beforeSend: function () {
            swal.fire({
                title: "Aguarde!",
                text: "Validando os dados...",
                imageUrl: base_url + "/assets/img/gifs/loader.gif",
                showConfirmButton: false
            });
        },
        success: function (data) {

            $('#txtIdAtividade').val('');

            if (data.code == 0) {
                swal.fire("Atenção!", data.message, "warning");
            } else if (data.code == 1) {
                // clearForm();
                $('#tableProjeto').bootstrapTable('refresh');
                Swal.fire({
                    title: 'Sucesso!',
                    text: data.message,
                    icon: 'success',
                    confirmButtonColor: '#268917',
                    confirmButtonText: 'Sair'
                });

                $('#tableAtividades').bootstrapTable('refresh');
                $('#modalAltSituacao').modal('hide');
                $('#formAltSituacao')[0].reset();
            } else if (data.code == 2) {
                swal.fire({
                    title: "Atenção!",
                    html: data.message,
                    icon: 'info',
                    confirmButtonColor: '#268917',
                    confirmButtonText: 'Ok'
                });
            }
        }
    });
}

function posicionaValor(linha) {
    $('#txtIdAtividade').val(linha.id_atividade);
    $(`#slaltsituacao`).selectpicker('val', linha.sitAtividade)


}

////////////////////////////////////////
// BUSCA HISTÓRICO DA ATIVIDADE                
// CRIADO POR ELIEL AMORIM            
// DATA: 02/06/2023                   
////////////////////////////////////////
function buscaHistorico(id_atv) {

    $.ajax({
        url: base_url + 'atividades/buscaHistorico',
        data: { id_atividade: id_atv },
        type: 'post',
        dataType: 'json',
        cache: false,
        success: function (data) {
            $('#tableHistorico').bootstrapTable('removeAll');
            $('#tableHistorico').bootstrapTable('append', data);
            $('#tableHistorico button').attr('disabled', true);
            swal.close();
            $('#modalHistorico').modal('show');
        },
        beforeSend: function () {
            swal.fire({
                title: "Aguarde!",
                text: "Buscando histórico de Atividade...",
                imageUrl: base_url + "/assets/img/gifs/loader.gif",
                showConfirmButton: false
            });
        },
        error: function () {
            swal.fire("Atenção!", "Ocorreu um erro ao retornar os dados!", "info");
        }
    })
}

$('#modalAnexo').on('hidden.bs.modal', function (e) {
    if (typeof reabre_modal != 'undefined') {
        if (reabre_modal) {
            reabre_modal--;
            $('#modalHistorico').modal('show');
        }
    }
})

$("#tableHistorico").on("click-cell.bs.table", function (field, value, row, $el) {
    if (value == 'anexo') {
        $('#modalHistorico').modal('hide');
        reabre_modal = 1;
    }
});


function retDashboard() {
    var html = ``;
    $.ajax({
        url: base_url + "dash/retDash",
        type: 'POST',
        dataType: "json",
        cache: false,
        error: function () {
            swal.fire("Atenção!", "Ocorreu um erro ao retornar os dados!", "error");
        },
        beforeSend: function () {
            swal.fire({
                title: "Aguarde!",
                text: "Validando os dados...",
                imageUrl: base_url + "/assets/img/gifs/loader.gif",
                showConfirmButton: false
            });
        },
        success: function (result) {
            swal.fire({
                timer: 100,
                title: "Aguarde!",
                text: "Validando os dados...",
                imageUrl: base_url + "/assets/img/gifs/loader.gif",
                showConfirmButton: false
            });
            var arrayDeptos = dashboardDeptos(result);

            var deptos = JSON.stringify(arrayDeptos);
            $('#viewDashboard').html('');
            $.each(JSON.parse(deptos), function (idx, departamento) {
                html += (`
                <div id="accordion">
                    <div class="card my-1">
                        <div class="card-header bg-dark">
                            <div class="row">
                                <div class="col-2">
                                    <a class="card-link btn btn-dark btn-block" data-toggle="collapse" href="#collapseOne"><span class="text-white">${departamento.descrDepartamento}</span></a>
                                </div>
                                <div class="col-10">
                                    <div class="row">
                                        <div class="col-3 text-center">
                                            <a class="card-link btn btn-outline-dark btn-block" data-toggle="collapse" href="#collapseOne"><span class="text-white">Aguardando</span></a>
                                        </div>
                                        <div class="col-3 text-center">
                                            <a class="card-link btn btn-warning btn-block" data-toggle="collapse" href="#collapseOne"><span class="text-white">Pendente</span></a>
                                        </div>
                                        <div class="col-3 text-center">
                                            <a class="card-link btn btn-info btn-block" data-toggle="collapse" href="#collapseOne"><span class="text-white">Executando</span></a>
                                        </div>
                                        <div class="col-3 text-center">
                                            <a class="card-link btn btn-success btn-block" data-toggle="collapse" href="#collapseOne"><span class="text-white">Concluído</span></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                            <div id="collapseOne" class="collapse show" data-parent="#accordion">
                                <div class="card-body p-1">
                                    <div class="row mt-1">
                                        <div class="col-12 p-0">
                                            <div class="col-12">
                                                <table class = "table table-bordered">
                                                    <tbody>`);
                var arrayProjetos = dashboardProjetos(departamento.descrDepartamento, result);
                var projeto = JSON.stringify(arrayProjetos);
                $.each(JSON.parse(projeto), function (idx, Projetos) {
                    html += (`                          <tr>
                                                            <td class = "col-2" >
                                                                <div class="row">
                                                                    <div class="col-9">
                                                                        <strong>Projeto: </strong><br><span>${Projetos.nomeProjeto}</span>
                                                                    </div>
                                                                    <div class="col-3">
                                                                        <div onclick='altProjeto(` + JSON.stringify(Projetos) + `);'<i class="fa-solid fa-list fa-2x" style="color: #337566;"></i></div>
                                                                    </div>
                                                                </div>
                                                                <hr class="py-0 my-0 shadow">    
                                                                
                                                                <div class="row">
                                                                    <div class="col-12 text-center pt-2">
                                                                        <button class="btn btn-outline-primary btn-sm" onclick="modalAnexo('${Projetos.anexoProjeto}');"><i class="fa-regular fa-images"></i></button>
                                                                        <button class="btn btn-outline-danger btn-sm" onclick='altEtapasDash(` + JSON.stringify(Projetos) + `);'>Cadastrar Etapas</button>
                                                                    </div>
                                                                </div>
                                                                </td> 
                                                            <td class = "col-10">
                                                                <div class="album bg-light">
                                                                    <div class="container-fluid p-1">
                                                                        <div class="row">
                                                                            <div class="col-md-3 pl-2 pr-0">
                                                                               
                                                                                       
                                                                                        `);
                    var arrayEtapas = dashboardEtapas(departamento.descrDepartamento, Projetos.descrPropjeto, result);
                    var Etapas = JSON.stringify(arrayEtapas);
                    $.each(JSON.parse(Etapas), function (idx, etapas) {
                        if (etapas.sitEtapa == 'A') {
                            html += (`                                                      
                                                                                        <div class="alert bg-dark p-1 mb-1">
                                                                                            <div class="row px-2">
                                                                                                <div class="col-8 pt-1">
                                                                                                    <h6 class="alert-heading p-0  m-0 text-white" style="font-size: 12px;">${etapas.nomeEtapa}</h6>
                                                                                                </div>
                                                                                                <div class="col-4 text-right">
                                                                                                    <a href="#"  onclick='cadAtividadeDash(` + JSON.stringify(etapas) + `);'><i data-tooltip="Adicionar atividade" class="fa-brands fa-creative-commons-nd" style="color: #FFF;"></i></a>
                                                                                                    <a href="#" onclick='altEtapas(` + JSON.stringify(etapas) + `);'><i class="fa-solid fa-list" style="color: #FFF;"></i></a>
                                                                                                </div>
                                                                                            </div>
                                                                                                `);
                            var arrayAtividade = dashboardAtividades(departamento.descrDepartamento, Projetos.descrPropjeto, etapas.id_etapa, result);
                            var Atividades = JSON.stringify(arrayAtividade);
                            $.each(JSON.parse(Atividades), function (idx, atividades) {
                                if (atividades.nomeAtividade != null) {
                                    html += (`                                                 
                                                                                            <div class="alert p-1 bg-light  my-1" role="alert">
                                                                                                <div class="row">
                                                                                                    <div class="col-6">
                                                                                                        <h6 class="alert-heading p-0  m-0" style="font-size: 12px;">${atividades.nomeAtividade}</h6>
                                                                                                    </div>
                                                                                                    <div class="col-6 text-right">
                                                                                                        ${situation(atividades.sitAtividade, result)}
                                                                                                        <buttom  onclick="modalAnexo('${atividades.anexoAtividade}');"><i class="fa-regular fa-images" class="bg-success"></i></buttom>
                                                                                                        <a href="#" onclick='altAtividade(` + JSON.stringify(atividades) + `);'<i class="fa-solid fa-list" style="color: #ea3434;"></i></a>
                                                                                                    </div>
                                                                                                </div>
                                                                                            </div>
                            `);
                                }

                            });
                            html += (` 
                                                                                            </div>
                            `);
                        }
                    });
                    html += (` 
                                                                                       
                                                                                    </div>
                                                                               

                                                                                <div class="col-md-3 py-0 px-1">
                                                                                    
                                                                                       
                    `);
                    var arrayEtapas = dashboardEtapas(departamento.descrDepartamento, Projetos.descrPropjeto, result);
                    var Etapas = JSON.stringify(arrayEtapas);
                    $.each(JSON.parse(Etapas), function (idx, etapas) {

                        if (etapas.sitEtapa == 'P') {

                            html += (` 
                                                                                            <div class="alert bg-warning p-1 mb-1">
                                                                                            <div class="row px-2">
                                                                                                <div class="col-8 pt-1">
                                                                                                    <h6 class="alert-heading p-0  m-0 text-dark" style="font-size: 12px;">${etapas.nomeEtapa}</h6>
                                                                                                </div>
                                                                                                <div class="col-4 text-right">
                                                                                                    <a href="#"  onclick='cadAtividadeDash(` + JSON.stringify(etapas) + `);'><i data-tooltip="Adicionar atividade" class="fa-brands fa-creative-commons-nd" style="color: #000;"></i></a>
                                                                                                    <a href="#" onclick='altEtapas(` + JSON.stringify(etapas) + `);'<i class="fa-solid fa-list" style="color: #000;"></i></a>
                                                                                                    
                                                                                                </div>
                                                                                            </div>
                                                                                                `);
                            var arrayAtividade = dashboardAtividades(departamento.descrDepartamento, Projetos.descrPropjeto, etapas.id_etapa, result);
                            var Atividades = JSON.stringify(arrayAtividade);
                            $.each(JSON.parse(Atividades), function (idx, atividades) {
                                if (atividades.nomeAtividade != null) {
                                    html += (`                                                 
                                                                                                <div class="alert p-1 bg-light  my-1" role="alert">
                                                                                                    <div class="row">
                                                                                                   
                                                                                                        <div class="col-6">
                                                                                                            <h6 class="alert-heading p-0  m-0" style="font-size: 12px;">${atividades.nomeAtividade}</h6>
                                                                                                        </div>
                                                                                                        <div class="col-6 text-right">
                                                                                                            ${situation(atividades.sitAtividade, result)}
                                                                                                            <buttom  onclick="modalAnexo('${atividades.anexoAtividade}');"><i class="fa-regular fa-images" class="bg-success"></i></buttom>
                                                                                                        <a href="#" onclick='altAtividade(` + JSON.stringify(atividades) + `);'<i class="fa-solid fa-list" style="color: #ea3434;"></i></a>
                                                                                                        </div>
                                                                                               
                                                                                                    </div>
                                                                                                </div>
                            `);
                                }

                            });
                            html += (`
                                                                                            </div>
                                `);
                        }
                    });
                    html += (` 
                                                                                     
                                                                                    </div>
                                                                               

                                                                                <div class="col-md-3 py-0 px-0">
                                                                                  
                                                                                        `);
                    var arrayEtapas = dashboardEtapas(departamento.descrDepartamento, Projetos.descrPropjeto, result);
                    var Etapas = JSON.stringify(arrayEtapas);
                    $.each(JSON.parse(Etapas), function (idx, etapas) {
                        if (etapas.sitEtapa == 'E') {


                            html += (` 
                                                                                            <div class="alert bg-info p-1 mb-1">
                                                                                                <div class="row px-2">
                                                                                                    <div class="col-8 pt-1">
                                                                                                        <h6 class="alert-heading p-0  m-0 text-dark" style="font-size: 12px;">${etapas.nomeEtapa}</h6>
                                                                                                    </div>
                                                                                                    <div class="col-4 text-right">
                                                                                                        <a href="#"  onclick='cadAtividadeDash(` + JSON.stringify(etapas) + `);'><i data-tooltip="Adicionar atividade" class="fa-brands fa-creative-commons-nd" style="color: #000;"></i></a>
                                                                                                        <a href="#" onclick='altEtapas(` + JSON.stringify(etapas) + `);'<i class="fa-solid fa-list" style="color: #000;"></i></a>
                                                                                                    </div>
                                                                                                </div>
                                                                                           

                                                                                            `);
                            var arrayAtividade = dashboardAtividades(departamento.descrDepartamento, Projetos.descrPropjeto, etapas.id_etapa, result);
                            var Atividades = JSON.stringify(arrayAtividade);
                            $.each(JSON.parse(Atividades), function (idx, atividades) {
                                if (atividades.nomeAtividade != null) {
                                    html += (`                                                 
                                                                                                    <div class="alert p-1 bg-light  my-1" role="alert">
                                                                                                        <div class="row">
                                                                                                            <div class="col-6">
                                                                                                                <h6 class="alert-heading p-0  m-0" style="font-size: 12px;">${atividades.nomeAtividade}</h6>
                                                                                                            </div>
                                                                                                            <div class="col-6 text-right">
                                                                                                                ${situation(atividades.sitAtividade, result)}
                                                                                                                <buttom  onclick="modalAnexo('${atividades.anexoAtividade}');"><i class="fa-regular fa-images" class="bg-success"></i></buttom>
                                                                                                                <a href="#" onclick='altAtividade(` + JSON.stringify(atividades) + `);'<i class="fa-solid fa-list" style="color: #ea3434;"></i></a>
                                                                                                            </div>
                                                                                                        </div>
                                                                                                    </div>
                            `);
                                }

                            });
                            html += (`
                            </div>
                                `);
                        }
                    });
                    html += (` 
                                                                                        </div>
                                                                                   
                                                                              

                                                                                <div class="col-md-3 py-0 px-1">
                                                                                   
                                                                                      
                                                                                        `);
                    var arrayEtapas = dashboardEtapas(departamento.descrDepartamento, Projetos.descrPropjeto, result);
                    var Etapas = JSON.stringify(arrayEtapas);
                    $.each(JSON.parse(Etapas), function (idx, etapas) {
                        if (etapas.sitEtapa == 'C') {
                            html += (` 
                                                                                            <div class="alert bg-success p-1 mb-1 mr-1">
                                                                                                <div class="row px-2">
                                                                                                    <div class="col-8 pt-1">
                                                                                                        <h6 class="alert-heading p-0  m-0 text-dark" style="font-size: 12px;">${etapas.nomeEtapa}</h6>
                                                                                                    </div>
                                                                                                    <div class="col-4 text-right">
                                                                                                        <a href="#"  onclick='cadAtividadeDash(` + JSON.stringify(etapas) + `);'><i data-tooltip="Adicionar atividade" class="fa-brands fa-creative-commons-nd" style="color: #FFF;"></i></a>
                                                                                                        <a href="#" onclick='altEtapas(` + JSON.stringify(etapas) + `);'<i class="fa-solid fa-list" style="color: #FFF;"></i></a>
                                                                                                    </div>
                                                                                                </div>
                                                                                            `);
                            var arrayAtividade = dashboardAtividades(departamento.descrDepartamento, Projetos.descrPropjeto, etapas.id_etapa, result);
                            var Atividades = JSON.stringify(arrayAtividade);
                            $.each(JSON.parse(Atividades), function (idx, atividades) {
                                if (atividades.nomeAtividade != null) {
                                    html += (`                                                 
                                                                                                <div class="alert p-1 bg-light  my-1" role="alert">
                                                                                                    <div class="row">
                                                                                                        <div class="col-6">
                                                                                                            <h6 class="alert-heading p-0  m-0" style="font-size: 12px;">${atividades.nomeAtividade}</h6>
                                                                                                        </div>
                                                                                                        <div class="col-6 text-right">
                                                                                                            ${situation(atividades.sitAtividade, result)}
                                                                                                            <buttom  onclick="modalAnexo('${atividades.anexoAtividade}');"><i class="fa-regular fa-images" class="bg-success"></i></buttom>
                                                                                                            <a href="#" onclick='altAtividade(` + JSON.stringify(atividades) + `);'<i class="fa-solid fa-list" style="color: #ea3434;"></i></a>
                                                                                                        </div>
                                                                                                    </div>
                                                                                                </div>
                            `);
                                }

                            });
                            html += (`    </div>                             `);
                        }
                    });
                    html += (` 
                                                                                        </div>
                                                                                    </div>
                                                                               
                       
                                                                            
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </td>
                                                        </tr>
                            `);
                });
                html += (` 
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                `);
            });
            $('#viewDashboard').append(html);
        }
    });
}


////////////////////////////////////////////////////////
// CARREGAMENTO INICIAL DE DADOS PARA DASHBOARD TAREFAS
// CRIADO POR ELIEL FELIX
// DATA: 27/07/2023                   
////////////////////////////////////////////////////////

function retTarefas() {
    var html = ``;
    $.ajax({
        url: base_url + "tarefas/retTarefas",
        type: 'POST',
        dataType: "json",
        cache: false,
        error: function () {
            swal.fire("Atenção!", "Ocorreu um erro ao retornar os dados!", "error");
        },
        beforeSend: function () {
            swal.fire({
                title: "Aguarde!",
                text: "Consultando os dados...",
                imageUrl: base_url + "/assets/img/gifs/loader.gif",
                showConfirmButton: false
            });
        },
        success: function (result) {
            swal.fire({
                timer: 100,
                title: "Aguarde!",
                text: "Consultando os dados...",
                imageUrl: base_url + "/assets/img/gifs/loader.gif",
                showConfirmButton: false
            });
            // var arrayDeptos = dashboardDeptos(result);

            // var deptos = JSON.stringify(arrayDeptos);



            $('#viewQuadroTarefas').html('');
            // $.each(JSON.parse(deptos), function (idx, departamento) {
            html += (` 
                <div id="accordion">
                    <div class="card my-1">
                        <div class="card-header bg-dark">
                            <div class="row">
                                
                                <div class="col-12">
                                
                                    <div class="row">
                                        <div class="text-center">
                                             <a><i tooltip="CRIAR TAREFA" onclick="$('#divAnexo').addClass('d-none'); cadTarefaDash()" class="fa-brands fa-creative-commons-nd fa-2x pt-1" style="color: #FFF; position:absolute;"></i></a>
                                        </div>
                                        <div class="col text-center">
                                            <a class="card-link btn btn-outline-dark btn-block" data-toggle="collapse" href="#collapseOne"><span class="text-white">Aguardando</span></a>
                                        </div>
                                        <div class="col text-center">
                                            <a class="card-link btn btn-warning btn-block" data-toggle="collapse" href="#collapseOne"><span class="text-white">Pendente</span></a>
                                        </div>
                                        <div class="col text-center">
                                            <a class="card-link btn btn-info btn-block" data-toggle="collapse" href="#collapseOne"><span class="text-white">Executando</span></a>
                                        </div>
                                        <div class="col text-center">
                                            <a class="card-link btn btn-success btn-block" data-toggle="collapse" href="#collapseOne"><span class="text-white">Concluído</span></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                            <div id="collapseOne" class="collapse show" data-parent="#accordion">
                                    <div class="row">
                                        <div class="col-12 p-0">
                                            <div class="col-12">
                                                <table class = "table table-bordered">
                                                    <tbody>`);
            // var arrayProjetos = dashboardProjetos(departamento.descrDepartamento, result);
            // var projeto = JSON.stringify(arrayProjetos);
            // $.each(JSON.parse(projeto), function (idx, departamento) {
            html += (`                          <tr>
                                                                <div class="album bg-light">
                                                                    <div class="container-fluid px-1">
                                                                        <div class="row">
                                                                            <div class="col-md-3 pl-2 pr-0">
                                                                               
                                                                                       
                                                                                        `);

            // DADOS = INFO DO CABEÇALHO 
            // DADOS.TAREFAS = INFO TAREFAS  
            $.each((result), function (idx, dados) {
                if (dados.situacao == 'A') {
                    html += (`                                                      
                                                                                        <div class="alert bg-dark p-1 mb-1">
                                                                                            <div class="row px-2">
                                                                                                <div class="col-8 pt-1">
                                                                                                    <h6 class="alert-heading p-0  m-0 text-white" style="font-size: 12px;">${dados.cabec_titulo}</h6>
                                                                                                </div>
                                                                                                <div class="col-4 text-right">
                                                                                                    <a onclick='$("#divAnexo").removeClass("d-none"); cadTarefaDash(` + JSON.stringify(dados) + `);'><i data-tooltip="ADICIONAR TAREFA" class="fa-brands fa-creative-commons-nd" style="color: #FFF;"></i></a>
                                                                                                    <a onclick='$("#divAnexo").addClass("d-none"); altCabec(` + JSON.stringify(dados) + `, flagEditCabec = true);'><i data-tooltip="EDITAR CABEÇALHO" class="fa-solid fa-list" style="color: #FFF;"></i></a>
                                                                                                </div>
                                                                                            </div>
                                                                                                `);
                    // var arrayAtividade = dashboardAtividades(departamento.descrDepartamento, Projetos.descrPropjeto, etapas.id_etapa, result);
                    // var Atividades = JSON.stringify(arrayAtividade);
                    $.each(dados.tarefas, function (idx, tarefas) {
                        if (tarefas.nome_tarefa != null) {
                            html += (`                                                 
                                                                                            <div class="alert p-1 bg-light  my-1" role="alert">
                                                                                                <div class="row">
                                                                                                    <div class="col-6">
                                                                                                        <h6 class="alert-heading p-0  m-0" style="font-size: 12px;">${tarefas.nome_tarefa}</h6>
                                                                                                    </div>
                                                                                                    <div class="col-6 text-right">
                                                                                                        ${situation(tarefas.situacao)}
                                                                                                        <buttom><i class="fa-regular fa-images"  `+ (tarefas.anexo != '' ? `onclick="modalAnexo('${tarefas.anexo}');" data-tooltip="VISUALIZAR ANEXO"` : `style="cursor: not-allowed" data-tooltip="SEM ANEXO"`) + `  class="bg-success"></i></buttom>
                                                                                                        <a  onclick='$("#divAnexo").removeClass("d-none"); altCabec(` + JSON.stringify(tarefas) + `);'><i class="fa-solid fa-list" data-tooltip="EDITAR TAREFA" style="color: #ea3434;"></i></a>
                                                                                                    </div>
                                                                                                </div>
                                                                                            </div>
                            `);
                        }

                    });
                    html += (` 
                                                                                            </div>
                            `);
                }
            });
            html += (` 
                                                                                       
                                                                                    </div>
                                                                               

                                                                                <div class="col-md-3 py-0 px-1">
                                                                                    
                                                                                       
                    `);

            // REPETE FOREACH NO ARRAY DADOS PARA GERAR AS TAREFAS EM "SITUAÇÃO PENDENTE"
            $.each(result, function (idx, dados) {

                if (dados.situacao == 'P') {

                    html += (` 
                                                                                            <div class="alert bg-warning p-1 mb-1">
                                                                                            <div class="row px-2">
                                                                                                <div class="col-8 pt-1">
                                                                                                    <h6 class="alert-heading p-0  m-0 text-dark" style="font-size: 12px;">${dados.cabec_titulo}</h6>
                                                                                                </div>
                                                                                                <div class="col-4 text-right">
                                                                                                    <a   onclick='$("#divAnexo").removeClass("d-none"); cadTarefaDash(` + JSON.stringify(dados) + `);'><i data-tooltip="ADICIONAR TAREFA" class="fa-brands fa-creative-commons-nd" style="color: #000;"></i></a>
                                                                                                    <a  data-tooltip="EDITAR CABEÇALHO" onclick='$("#divAnexo").addClass("d-none");altCabec(` + JSON.stringify(dados) + `, flagEditCabec = true);'<i class="fa-solid fa-list" style="color: #000;"></i></a>
                                                                                                    
                                                                                                </div>
                                                                                            </div>
                                                                                                `);
                    // var arrayAtividade = dashboardAtividades(departamento.descrDepartamento, Projetos.descrPropjeto, etapas.id_etapa, result);
                    // var Atividades = JSON.stringify(arrayAtividade);
                    $.each(dados.tarefas, function (idx, tarefas) {
                        if (tarefas.nome_tarefa != null) {
                            html += (`                                                 
                                                                                                <div class="alert p-1 bg-light  my-1" role="alert">
                                                                                                    <div class="row">
                                                                                                   
                                                                                                        <div class="col-6">
                                                                                                            <h6 class="alert-heading p-0  m-0" style="font-size: 12px;">${tarefas.nome_tarefa}</h6>
                                                                                                        </div>
                                                                                                        <div class="col-6 text-right">
                                                                                                            ${situation(tarefas.situacao)}
                                                                                                            <buttom><i class="fa-regular fa-images" `+ (tarefas.anexo != '' ? `onclick="modalAnexo('${tarefas.anexo}');" data-tooltip="VISUALIZAR ANEXO"` : `style="cursor: not-allowed" data-tooltip="SEM ANEXO"`) + ` class="bg-success"></i></buttom>
                                                                                                        <a  onclick='$("#divAnexo").removeClass("d-none"); altCabec(` + JSON.stringify(tarefas) + `);'><i class="fa-solid fa-list" data-tooltip="EDITAR TAREFA" style="color: #ea3434;"></i></a>
                                                                                                        </div>
                                                                                               
                                                                                                    </div>
                                                                                                </div>
                            `);
                        }

                    });
                    html += (`
                                                                                            </div>
                                `);
                }
            });
            html += (` 
                                                                                     
                                                                                    </div>
                                                                               

                                                                                <div class="col-md-3 py-0 px-0">
                                                                                  
                                                                                        `);
            // var arrayEtapas = dashboardEtapas(departamento.descrDepartamento, Projetos.descrPropjeto, result);
            // var Etapas = JSON.stringify(arrayEtapas);
            $.each(result, function (idx, dados) {
                if (dados.situacao == 'E') {


                    html += (` 
                                                                                            <div class="alert bg-info p-1 mb-1">
                                                                                                <div class="row px-2">
                                                                                                    <div class="col-8 pt-1">
                                                                                                        <h6 class="alert-heading p-0  m-0 text-dark" style="font-size: 12px;">${dados.cabec_titulo}</h6>
                                                                                                    </div>
                                                                                                    <div class="col-4 text-right">
                                                                                                        <a   onclick='$("#divAnexo").removeClass("d-none"); cadTarefaDash(` + JSON.stringify(dados) + `);'><i data-tooltip="ADICIONAR TAREFA" class="fa-brands fa-creative-commons-nd" style="color: #000;"></i></a>
                                                                                                        <a  data-tooltip="EDITAR CABEÇALHO" onclick='$("#divAnexo").addClass("d-none"); altCabec(` + JSON.stringify(dados) + `, flagEditCabec = true);'<i class="fa-solid fa-list" style="color: #000;"></i></a>
                                                                                                    </div>
                                                                                                </div>
                                                                                           

                                                                                            `);
                    // var arrayAtividade = dashboardAtividades(departamento.descrDepartamento, Projetos.descrPropjeto, etapas.id_etapa, result);
                    // var Atividades = JSON.stringify(arrayAtividade);
                    $.each(dados.tarefas, function (idx, tarefas) {
                        if (tarefas.nome_tarefa != null) {
                            html += (`                                                 
                                                                                                    <div class="alert p-1 bg-light  my-1" role="alert">
                                                                                                        <div class="row">
                                                                                                            <div class="col-6">
                                                                                                                <h6 class="alert-heading p-0  m-0" style="font-size: 12px;">${tarefas.nome_tarefa}</h6>
                                                                                                            </div>
                                                                                                            <div class="col-6 text-right">
                                                                                                                ${situation(tarefas.situacao)}
                                                                                                                <buttom><i class="fa-regular fa-images" `+ (tarefas.anexo != '' ? `onclick="modalAnexo('${tarefas.anexo}');" data-tooltip="VISUALIZAR ANEXO"` : `style="cursor: not-allowed" data-tooltip="SEM ANEXO"`) + ` class="bg-success"></i></buttom>
                                                                                                                <a  onclick='$("#divAnexo").removeClass("d-none"); altCabec(` + JSON.stringify(tarefas) + `);'><i class="fa-solid fa-list" data-tooltip="EDITAR TAREFA"  style="color: #ea3434;"></i></a>
                                                                                                            </div>
                                                                                                        </div>
                                                                                                    </div>
                            `);
                        }

                    });
                    html += (`
                            </div>
                                `);
                }
            });
            html += (` 
                                                                                        </div>
                                                                                   
                                                                              

                                                                                <div class="col-md-3 py-0 px-1">
                                                                                   
                                                                                      
                                                                                        `);
            // var arrayEtapas = dashboardEtapas(departamento.descrDepartamento, Projetos.descrPropjeto, result);
            // var Etapas = JSON.stringify(arrayEtapas);
            $.each(result, function (idx, dados) {
                if (dados.situacao == 'C') {
                    html += (` 
                                                                                            <div class="alert bg-success p-1 mb-1 mr-1">
                                                                                                <div class="row px-2">
                                                                                                    <div class="col-8 pt-1">
                                                                                                        <h6 class="alert-heading p-0  m-0 text-dark" style="font-size: 12px;">${dados.cabec_titulo}</h6>
                                                                                                    </div>
                                                                                                    <div class="col-4 text-right">
                                                                                                        <a   onclick='$("#divAnexo").removeClass("d-none"); cadTarefaDash(` + JSON.stringify(dados) + `);'><i data-tooltip="ADICIONAR TAREFA" class="fa-brands fa-creative-commons-nd" style="color: #FFF;"></i></a>
                                                                                                        <a  data-tooltip="EDITAR CABEÇALHO" onclick='$("#divAnexo").addClass("d-none"); altCabec(` + JSON.stringify(dados) + `, flagEditCabec = true);'<i class="fa-solid fa-list" style="color: #FFF;"></i></a>
                                                                                                    </div>
                                                                                                </div>
                                                                                            `);
                    // var arrayAtividade = dashboardAtividades(departamento.descrDepartamento, Projetos.descrPropjeto, etapas.id_etapa, result);
                    // var Atividades = JSON.stringify(arrayAtividade);
                    $.each(dados.tarefas, function (idx, tarefas) {
                        if (tarefas.nome_tarefa != null) {
                            html += (`                                                 
                                                                                                <div class="alert p-1 bg-light  my-1" role="alert">
                                                                                                    <div class="row">
                                                                                                        <div class="col-6">
                                                                                                            <h6 class="alert-heading p-0  m-0" style="font-size: 12px;">${tarefas.nome_tarefa}</h6>
                                                                                                        </div>
                                                                                                        <div class="col-6 text-right">
                                                                                                            ${situation(tarefas.situacao)}
                                                                                                            <buttom><i class="fa-regular fa-images" `+ (tarefas.anexo != '' ? `onclick="modalAnexo('${tarefas.anexo}');" data-tooltip="VISUALIZAR ANEXO"` : `style="cursor: not-allowed" data-tooltip="SEM ANEXO"`) + ` class="bg-success"></i></buttom>
                                                                                                            <a  onclick='$("#divAnexo").removeClass("d-none"); altCabec(` + JSON.stringify(tarefas) + `);'<i class="fa-solid fa-list" data-tooltip="EDITAR TAREFA" style="color: #ea3434;"></i></a>
                                                                                                        </div>
                                                                                                    </div>
                                                                                                </div>
                            `);
                        }

                    });
                    html += (`    </div>                             `);
                }
            });
            html += (` 
                                                                                        </div>
                                                                                    </div>
                                                                               
                       
                                                                            
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                        </tr>
                            `);
            // });
            html += (` 
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                
                            </div>
                        </div>
                    </div>
                </div>
                `);
            // });
            $('#viewQuadroTarefas').append(html);
        }
    });
}



function dashboardDeptos(value) {
    var deptos = [];
    var countDepto = [];
    var jsonDepto = JSON.stringify(value);
    $.each(JSON.parse(jsonDepto), function (idx, obj) {
        if (countDepto.indexOf(obj.descrDepartamento) > -1) { } else {
            deptos.push(obj);
            countDepto.push(obj.descrDepartamento);
        }
    });
    return deptos;
};




function dashboardProjetos(depto, result) {
    var projetos = [];
    var countProjeto = [];
    var jsonProjetos = JSON.stringify(result);
    $.each(JSON.parse(jsonProjetos), function (idx, obj) {
        if (countProjeto.indexOf(obj.descrPropjeto) > -1) { } else {
            if (obj.descrDepartamento == depto) {
                countProjeto.push(obj.descrPropjeto);
                projetos.push(obj);
            }
        }
    });
    return projetos;
};




function dashboardEtapas(depto, projetos, result) {
    var etapas = [];
    var etapa = [];
    var jsonEtapas = JSON.stringify(result);
    $.each(JSON.parse(jsonEtapas), function (idx, obj) {
        if (etapas.indexOf(obj.descrEtapa) > -1) { } else {
            if (obj.descrDepartamento == depto) {
                if (obj.descrPropjeto == projetos) {
                    if (obj.statusEtapa != 'D') {
                        etapas.push(obj.descrEtapa);
                        etapa.push(obj);
                    }
                }
            }
        }
    });
    return etapa;
};


function dashboardAtividades(depto, projetos, etapa, value) {
    var Atividades = [];
    var Ativ = [];
    var jsonAtividades = JSON.stringify(value);
    $.each(JSON.parse(jsonAtividades), function (idx, obj) {

        if (obj.descrDepartamento == depto) {
            if (obj.descrPropjeto == projetos) {
                if (obj.id_etapa == etapa) {
                    Atividades.push(obj.descrAtividade);
                    if (obj.sitAtividade != 'R') {
                        if (obj.statusAtividade != 'D') {
                            Ativ.push(obj);
                        }
                    }
                }
            }
        }

    });
    return Ativ;
};


/////////////////////////////////////////////////////////////////
// COLOCA DADOS NO FORMULÁRIO PARA EDIÇÃO DE CABEÇALHO OU TAREFA
// CRIADO POR ELIEL FELIX
// DATA: 30/07/2023                   
/////////////////////////////////////////////////////////////////
function altCabec(value) {

    // console.log(value);

    $('#txtIdCabec').val(value.id_cabec);

    if (typeof (value.id_tarefa) != 'undefined') {
        $('#txtIdTarefa').val(value.id_tarefa);
        $('#txtNomeTarefa').val(value.nome_tarefa);
    } else {
        $('#txtNomeTarefa').val(value.cabec_titulo);
    }

    // $('#slAtivDepto').selectpicker('val', value.id_departamento); 

    // selectProjetos(value.id_departamento, {
    //     projeto: value.id_projeto,
    //     etapa: value.id_etapa
    // })


    $('#txtDescTarefa').val(value.descricao);
    $('#slRespTarefa').selectpicker('val', value.responsavel);
    $('#slTarefaStatus').selectpicker('val', value.situacao);
    // if (typeof (value.data_fim) == 'string') {
    //     $('#txtDataFimTarefa').val((value.data_fim).split('/').reverse().join('-'));
    // }
    $('#txtDataFimTarefa').val(value.data_fim);
    $('#ModalTarefas').modal('show');
}

function altAtividade(value) {
    $('#txtIdAtividade').val(value.id_atividade);
    $('#slAtivDepto').selectpicker('val', value.id_departamento);

    selectProjetos(value.id_departamento, {
        projeto: value.id_projeto,
        etapa: value.id_etapa
    })

    $('#txtNomeAtividade').val(value.nomeAtividade);
    $('#txtDescAtividade').val(value.descrAtividade);
    $('#slRespAtividade').selectpicker('val', value.id_responsavel);
    $('#slAtivStatus').selectpicker('val', value.sitAtividade);
    if (typeof (value.dtEntregaAtividade) == 'string') {
        $('#txtDataFimAtividade').val((value.dtEntregaAtividade).split('/').reverse().join('-'));
    }
    $('#ModalAtividades').modal('show');
}

function cadTarefaDash(value) {
    // SE FOR O CADASTRO DE UM CARD, VALUE SERÁ NULO
    if (!$.isEmptyObject(value)) {
        $('#txtIdCabec').val(value.id_cabec);
    }
    $('#ModalTarefas').modal('show');

}

function cadAtividadeDash(value) {
    $('#ativDepto').addClass('d-none');
    $('#ativProjeto').addClass('d-none');
    $('#ativEtapa').addClass('d-none');
    $('#slAtivDepto').selectpicker('val', value.id_departamento);
    $('#slAtivProjeto').selectpicker('val', value.id_projeto);

    $('#slAtivEtapas').selectpicker('refresh');
    $('#slAtivEtapas').html('');
    $('#slAtivEtapas').append('<option value="' + value.id_etapa + '">' + value.nomeEtapa + '</option>').selectpicker('refresh');
    $('#ModalAtividades').modal('show');
}

function altEtapasDash(value) {
    console.log(value);
    $('#slEtapProjeto').selectpicker('refresh');
    $('#slEtapProjeto').html('');
    $('#slEtapProjeto').append('<option value="' + value.id_projeto + '">' + value.nomeProjeto + '</option>').selectpicker('refresh');
    $('#ModalEtapas').modal('show');
}





function situation(value, row) {
    if (value == 'A') {
        return ` <button class="btn btn-warning btn-sm px-2 py-0 m-0" style="font-size: 10px; cursor: default;">Aguar.</button>`;
    } else if (value == `P`) {
        return ` <button class=" btn btn-danger btn-sm px-2 py-0 m-0" style="font-size: 10px; cursor: default; margin: 40px: !important">Pend.</button>`;
    } else if (value == `E`) {
        return ` <button class=" btn btn-dark btn-sm px-2 py-0 m-0" style="font-size: 10px; cursor: default;">Exec.</button>`;
    } else if (value == `C`) {
        return ` <button class=" btn btn-success btn-sm px-2 py-0 m-0" style="font-size: 10px; cursor: default;">Conc.</button>`;
    } else if (value == `I`) {
        return ` <button class=" btn btn-info btn-sm px-2 py-0 m-0" style="font-size: 10px; cursor: default;">Inic.</button>`;
    }
}


function altEtapas(value) {
    console.log(value);
    $('#txtIdEtapa').val(value.id_etapa);
    $('#txtNomeEtapa').val(value.nomeEtapa);
    $('#txtDescEtapa').val(value.descrEtapa);
    $('#txtEtaDtLimit').val(value.dtEntregaEtapaE);
    $('#SlEtaPrioridade').selectpicker('val', value.priorEtapa);
    $('#SlEtapaStatus').selectpicker('val', value.sitEtapa);
    $('#slEtapProjeto').selectpicker('val', value.id_projeto);
    $('#slEtapResponsavel').selectpicker("val", value.idResponsavel);
    $('#ModalEtapas').modal('show');
}

function altProjeto(value) {
    $('#txtIdProjeto').val(value.id_projeto);
    $('#txtNomeProjeto ').val(value.nomeProjeto);
    $('#txtDescProjeto').val(value.descrPropjeto);
    $('#txtDataFimProjeto').val(value.dtEntregaProjetoE);
    $('#slRespProjeto').selectpicker('val', value.idResponsavel);
    $('#slDepProjeto').selectpicker('val', value.id_departamento);
    $('#ModalProjeto').modal('show');
}