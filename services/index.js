
export default class ServiceBase {
    constructor(props) {
        //setters
        if(!props.ajax) throw TypeError('Missing argument ajax')
        this.ajax = props.ajax;
    }

    async makeRequest(config) {
        try {
            return await this.ajax(config);
        } catch(err) {
            return this.normalizeError(err);
        }
    }

    normalizeError(err) {
       return Promise.reject(err)
    }
}