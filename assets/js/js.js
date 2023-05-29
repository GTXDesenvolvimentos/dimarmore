// FUNÇÃO arrayColumn DO PHP PARA JAVASCRIPT
const arrayColumn = (array, column) => {
    return array.map(item => parseInt(item[column]));
};

////////////////////////////////////////
// FUNÇOES GLOBAIS                    
// CRIADO POR MARCIO SILVA            
// DATA: 09/02/2023                   
////////////////////////////////////////
function clearForm() {
    $('#formDepartamentos').trigger('reset');
    $('#formProjetos').trigger('reset');
    $('#formEtapas').trigger('reset');
    $('#formAtividade').trigger('reset');
    $(".selectpicker").selectpicker("refresh");
    $('#ModalDepto').modal('hide');
    $('#ModalProjeto').modal('hide');
    $('#ModalEtapas').modal('hide');
    $('#ModalAtividades ').modal('hide');
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
            //complete: function(data) {
            // alert('123');
            // },
            success: function (data) {
                console.log(data);
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
            $('#slEtapResponsavel, #slEtapResponsavel, #slRespAtividade').prop('disabled', false);
            $('#slEtapResponsavel, #slEtapResponsavel, #slRespAtividade').selectpicker('refresh');
            $('#slEtapResponsavel, #slEtapResponsavel, #slRespAtividade').html('');
            $('#slEtapResponsavel, #slEtapResponsavel, #slRespAtividade').append('<option value=""> Responsável </option>');

            var jsonData1 = JSON.stringify(result);
            $.each(JSON.parse(jsonData1), function (idx, obj) {
                $('#slResponsavel, #slRespProjeto, #slEtapResponsavel, #slRespAtividade').append('<option value="' + obj.id_users + '">' + obj.nome + '</option>').selectpicker('refresh');
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

if (myarr[4] == 'projetos') {
    selectDepto();
    selectUsers();
} else if (myarr[4] == 'etapas') {
    selectUsers();
    selectProjetos();
} else if (myarr[4] == 'atividades') {
    selectDepto();
    selectUsers();
}

function altsituacao(){
    // const { value: fruit } = await 
    // Swal.fire({
    //     title: 'Alterar Situação:',
    //     input: 'select',
    //     inputOptions: {
     
    //         apples: 'Apples',
    //         bananas: 'Bananas',
    //         grapes: 'Grapes',
    //         oranges: 'Oranges'
    
   
    //     },
    //     inputPlaceholder: 'Select a fruit',
    //     showCancelButton: true,
    //     inputValidator: (value) => {
    //       return new Promise((resolve) => {
    //         if (value === 'oranges') {
    //           resolve()
    //         } else {
    //           resolve('You need to select oranges :)')
    //         }
    //       })
    //     }
    //   })
      
    //   if (fruit) {
    //     Swal.fire(`You selected: ${fruit}`)
    //   }
}