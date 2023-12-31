const  Sequelize =  require( "sequelize");
const  db = require ('./db')
const {servico, Servico} = require('./servico');


const Agendamento = db.define('agendas',{
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
                        references: {
                          model: Servico,
                          key: 'servicoId'
                        }
                      },
});

Agendamento.hasOne(servico)
Agendamento.belongsTo(servico,{ foreignKey: 'servicoId' });

//Agendamento.sync()


  
  module.exports =  Agendamento;
