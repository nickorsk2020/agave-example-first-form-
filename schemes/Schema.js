let Schema = {
    "nameform":"login_form",
    "errorForm":"Данные заполнены не верно",
    "classes": {
        "errorForm":"error-form-validate"
    },
    "elements": {
        "login": {
            "type":'input',
            "classes":{
                "label":"",
                "input":""
            },
            "props": {
                "name": "Логин",
                "type": "text"
            }
            ,
            "value": "",
            "validators": [
                {
                    "type": "notNull",
                    "error": "Введите логин"
                }
            ]
        },
        "password": {
            "type":'input',
            "classes":{
                "label":"",
                "input":""
            },
            "props": {
                "name": "Пароль",
                "type": "password"
            },
            "value": "",
            "validators": [
                {
                    "type": "notNull",
                    "error": "Заполните пароль"
                }
            ]
        },
        "submit": {
            "type":'submit',
            "classes":{
                "button":"btn btn-primary",
            },
            "props": {
                "name":"Авторизоваться"
            }
        }
    }
};
export  default Schema;