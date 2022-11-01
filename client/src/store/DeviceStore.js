import {makeAutoObservable} from 'mobx';

export default class DeviceStore {
    constructor() {
        this._types = [
            {id: 1, name: 'Ноутбуки'},
            {id: 2, name: 'Мониторы'},
            {id: 3, name: 'Видеокарты'},
            {id: 4, name: 'Периферия'}
        ]
        this._brands = [
            {id: 1, name: 'Samsung'},
            {id: 2, name: 'Intel'},
            {id: 3, name: 'AMD'},
            {id: 4, name: 'Apacer'},
            {id: 5, name: 'A-Data'},
            {id: 6, name: 'Smartbuy'},
            {id: 7, name: 'Toshiba'},
            {id: 8, name: 'Seagate'},
            {id: 9, name: 'GYGABYTE'}
        ]
        this._devices = [
            {id: 1, name: "SATA 860 Pro", price: 17000, rating: 5, img: `https://www.purposechurch.com/wp-content/uploads/2017/10/fpo400x300.png`},
            {id: 2, name: "AMD Radeon R5 Series 1028", price: 6000, rating: 5, img: `https://www.purposechurch.com/wp-content/uploads/2017/10/fpo400x300.png`},
            {id: 3, name: "AMD Radeon R5 Series 512", price: 4000, rating: 5, img: `https://www.purposechurch.com/wp-content/uploads/2017/10/fpo400x300.png`},
            {id: 4, name: "Apacer AS350 PANTHER 256", price: 2300, rating: 5, img: `https://www.purposechurch.com/wp-content/uploads/2017/10/fpo400x300.png`},
            {id: 5, name: "Apacer AS350 XOR 512", price: 5100, rating: 5, img: `https://www.purposechurch.com/wp-content/uploads/2017/10/fpo400x300.png`},
        ]
        this._selectedType = {}
        this._selectedBrand = {}
        makeAutoObservable(this)
    }

    setIsTypes(types) {
        this._types = types
    }
    setIsBrands(brands) {
        this._brands = brands
    }
    setIsDevices(devices) {
        this._devices = devices
    }

    setSelectedType(type) {
        this._selectedType = type
    }
    setSelectedBrand(brand) {
        this._selectedBrand = brand
    }

    get types() {
        return this._types
    }
    get brands() {
        return this._brands
    }
    get devices() {
        return this._devices
    }
    get selectedType() {
        return this._selectedType
    }
    get selectedBrand() {
        return this._selectedBrand
    }
}