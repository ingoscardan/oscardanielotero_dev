import {MatIcon} from "@angular/material/icon";

export default class MainMenuModel {
    link:string;
    name:string
    icon:MatIcon
    constructor(link: string, name: string, icon:MatIcon){
        this.link = link;
        this.name = name;
        this.icon = icon;
    }
}
