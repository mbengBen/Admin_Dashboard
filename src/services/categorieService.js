
import axios from "axios";
export class categorieService{
    static serverURL =`http://localhost:9000`;
     
    static getAllCategories(){
        let dataURL =`${this.serverURL}/categories`;
        return axios.get(dataURL)
    }

    static getCategory(categorieId){
        let dataURL =`${this.serverURL}/categories/${categorieId}` ;
        return axios.get(dataURL)
    }

    static createCategory(categorie){
        let dataURL = `${this.serverURL}/categories/` ;
        return axios.post(dataURL,categorie)
    }

    static updateCategory(categorie, categorieId){
        let dataURL =` ${this.serverURL}/categories/${categorieId}`;
        return axios.put(dataURL,categorie)
    }
 
    static deleteCategory(categorieId){
        let dataURL =`${this.serverURL}/categories/${categorieId}` ;
        return axios.delete(dataURL)
    }

}