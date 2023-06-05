<style>
    html {
        font-family: "Nunito";
        --scrollbarBG: #1B1C28;
        --thumbBG: #ffff;

    }

    body {
        box-sizing: border-box;
        margin: 0;
        overflow: auto;
        padding: 0;
        background-color: #FFFF;
        height: 100%;
        width: 100%;
        scrollbar-width: thin;
        scrollbar-color: var(--thumbBG) var(--scrollbarBG);
    }

    body::-webkit-scrollbar {
        width: 11px;
        height: 4px;
    }

    body::-webkit-scrollbar:horizontal {
        height: 4px;
    }

    body::-webkit-scrollbar-track,
    body::-webkit-scrollbar-track:horizontal {
        background: var(--scrollbarBG);
    }

    body::-webkit-scrollbar-thumb,
    body::-webkit-scrollbar-thumb:horizontal {
        background-color: var(--thumbBG);
        border-radius: 6px;
        border: 3px solid var(--scrollbarBG);
    }

    .boards {
        display: inline-flex;
        flex: 1;
        height: 100%;
        width: 100%;
        border-top: 1px solid rgb(212, 212, 212);
    }

    .board {
        background: #F5F5F5;
        margin: 0 .5rem;
        padding: 0px;
        display: flex;
        flex: 1;
        flex-direction: column;
    }

    .board h6 {
        padding: 16px !important;
        min-width: 300px;
        width: 100%;
        margin: 0;
        background-color: #FFFF;
        font-weight: bold;
        font-size: 14px;
        color: #1C1C2E;
    }

    .dropzone {
        padding: 16px;
        min-width: 300px;
        min-height: 200px;
        justify-content: center;
        height: 100%;
    }

    .kanbanCard {
        background-color: #FFFF;
        padding: 16px;
        width: 250px;
        margin: auto;
        margin-bottom: 2rem;
        border-radius: 4px;
        font-weight: 600;
        font-size: 16px;
    }

    .description {
        color: #434343;
        font-weight: normal;
        font-size: 14px;
    }

    .red {
        border-left: 5px solid #E2163B;
    }

    .purple {
        border-left: 5px solid #4515CF;
    }

    .blue {
        border-left: 5px solid #158CCF;
    }

    .yellow {
        border-left: 5px solid #EFA20C;
    }

    .green {
        border-left: 5px solid #5AD111;
    }

    .highlight {
        background-color: #D7D7D7cc;
    }

    .kanbanCard,
    .dropzone {
        transition: 400ms;
    }

    .is-dragging,
    .darkmode .is-dragging {
        cursor: move !important;
        cursor: -webkit-grabbing;
        opacity: .3;
    }

    .over {
        background: #E9E9E9;
    }

    .form-inline {
        display: flex;
        align-items: center;
        justify-content: center;
    }

    label {
        margin: 0 !important
    }

    input {
        margin: 0rem 1rem 0rem .5rem !important;
    }

    .priority {
        cursor: pointer;
        color: #989898;
    }

    .is-priority,
    .darkmode .is-priority {
        cursor: pointer;
        color: #FF7A00;
    }

    .delete {
        color: #E2163B;
        cursor: pointer;
    }

    .invisibleBtn:focus,
    #theme-btn:focus {
        padding: 0;
        margin: 0;
        background: none;
        border: none;
        outline: none;
        cursor: pointer;
        box-shadow: none !important;
    }

    .invisibleBtn {
        padding: 0;
        margin: 0;
        background: none;
        border: none;
        cursor: pointer;
    }

    /* dark mode */
    .darkmode {
        background-color: #1B1C28;
    }

    .darkmode * {
        color: white;
        background-color: #1B1C28;
    }

    .darkmode .kanbanCard {
        background-color: #1B1C28;
    }

    .darkmode .controls {
        background-color: #1B1C28;
    }

    .darkmode .form-control {
        box-shadow: none;
        border: none;
        background-color: #252632;
        color: white;
    }

    .darkmode .form-control:focus {
        box-shadow: none;
        border: none;
        background-color: #252632;
        color: white;
    }

    .darkmode .form-inline {
        background-color: #1B1C28;
    }

    .darkmode .btn-dark {
        background-color: #252632;
        border: none;
    }

    .darkmode .btn-dark:hover {
        background-color: #292A36 !important
    }

    .darkmode .dropzone {
        background-color: #292A36 !important;
    }

    .darkmode .boards {
        border-top: 1px solid #252632;
        scrollbar-color: dark;
    }

    .darkmode h3 {
        background-color: #1B1C28;
    }

    .darkmode .over {
        background-color: #15151D !important;
    }

    .darkmode .delete {
        color: #dc3545;
    }

    .darkmode #theme-btn {
        color: white !important;
    }

    .darkmode h3 {
        color: white !important;
    }

    /* loading */
    .loader {
        border: 16px solid white;
        /* Light grey */
        border-top: 16px solid #1d1f20;
        /* Blue */
        border-radius: 50%;
        width: 120px;
        height: 120px;
        animation: spin 2s linear infinite;
        background-color: transparent;
        /* Light grey */
    }

    @keyframes spin {
        100% {
            transform: rotate(360deg);
        }

        0% {
            transform: rotate(0deg);
        }
    }

    #loadingScreen {
        position: absolute;
        z-index: 30;
        width: 100vw;
        height: 100vh;
        overflow: hidden;
        background-color: white;
        display: flex;
        align-items: center;
        justify-content: center;
    }
</style>

<div class="boards overflow-auto p-0" id="boardsContainer"></div>
