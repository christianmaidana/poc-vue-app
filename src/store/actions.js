import * as types from './mutation-types'

import Logger from '../utils/logger';

const logger = Logger('Actions');

export const initFiles = ({commit}) => {
    logger('Fetching files');
    fetch(`http://localhost:3000/rest/contents`)
    .then(_ => _.json())
    .then(json => {
        logger(`Amount of files fetched: ${json.length}`);
        return commit(types.INIT_FILES, json)
    })
}

export const addFile = ({commit}, file) => {
    commit(types.ADD_FILE, {...file, id: Math.random().toString()});
    const params = {
        method: 'POST',
        body: JSON.stringify(file),
        headers: {
            'Content-Type': 'application/json', 
        }
    };
    fetch(`http://localhost:3000/rest/contents`, params)
    .then(_ => _.json())
    .catch((err) => console.warn(err));
    //.then(json => commit(types.ADD_FILE, json))
  
}

export const removeFile = ({commit}, id) => {
    commit(types.REMOVE_FILE, id);
    const params = {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
            'Accept': '*/*',
        }
    };
    fetch(`http://localhost:3000/rest/contents/${id}`, params)
    .then((_) => _.json())
    .catch((err) => console.warn(err));
}