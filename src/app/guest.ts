
export class Guest {

    _address: string;
    _addr: string;

    constructor(public id: string, public firstName: string, public  lastName: string) {


    }
    set address(_addr) {
        console.log('Setting The address');
        this._address = this._addr;

    }
    get address() {
        console.log('Getting The address');
        return this._address;
    }
}
