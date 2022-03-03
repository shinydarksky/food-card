export const listUser = [
    {
        id: 1,
        username: 'admin',
        password: 'admin',
        role: {
            admin: true,
            menu: {
                manage_blog: {
                    name: 'Quản lý bài biết',
                    add: false,
                    edit: true,
                    delete: true,

                },
                manage_setting: {
                    name: 'Quản lý cài đặt',
                    add: true,
                    edit: true,
                    delete: true,

                },
                
            }
        }
    },
    {
        id: 2,
        username: 'admin1',
        password: 'admin1',
        role: {
            admin: false,
            menu: {
                manage_blog: {
                    name: 'Quản lý bài biết',
                    add: true,
                    edit: true,
                    delete: true,

                },
                manage_setting: {
                    name: 'Quản lý cài đặt',
                    add: true,
                    edit: true,
                    delete: true,

                },
                
            }
        }
    }, {
        id: 3,
        username: 'admin2',
        password: 'admin2',
        role: {
            admin: false,
            menu: {

            }
        }
    }
    , {
        id: 4,
        username: 'admin3',
        password: 'admin3',
        role: {
            admin: false,
            menu: {

            }
        }
    }

]