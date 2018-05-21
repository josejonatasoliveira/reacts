import React from 'react';

const Search = () => {
    return (
        <div>
            <h1>h1. Bootstrap heading</h1>
            <form className="form-inline my-2 my-lg-0">
                <input className="form-control mr-sm-2" type="search" style={{"min-width":"450px"}} placeholder="Pesquisar eventos" aria-label="Search" />
                <input className="form-control mr-sm-2" type="search" style={{"min-width":"450px"}} placeholder="Pesquisar por cidade" aria-label="Search" />
                <div className="btn-group">
                    <button type="button" className="btn btn-outline-primary" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Todas as datas</button>
                    <div className="dropdown-menu">
                        <a className="dropdown-item" href="#">Action</a>
                        <a className="dropdown-item" href="#">Another action</a>
                        <a className="dropdown-item" href="#">Something else here</a>
                        <div className="dropdown-divider"></div>
                        <a className="dropdown-item" href="#">Separated link</a>
                    </div>
                </div>
                <button type="button" class="btn btn-danger">Pesquisar</button>
            </form>
        </div>

    );
};
export default Search;