const  Sequelize =  require( "sequelize");
const  db = require ('./db')
const {servico, Servico} = require('./servico');


const Historico = db.define('agendas_h',{
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    nome: {
        type: Sequelize.STRING,
        allowNull: false,
        },
    email: {
        type: Sequelize.STRING,
        allowNull: false,

        },
        data: {
            type: Sequelize.DATE,
            allowNull: false,
            },
        hora: {
                type: Sequelize.DATE,
                allowNull: false,
                },
        id_especialista: {
                    type: Sequelize.STRING,
                    allowNull: false,
                    },
        servicoId: {
                        type: Sequelize.STRING,
                        allowNull: false,
                       
                      },
});



//Historico.sync()

module.exports = Historico;