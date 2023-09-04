import React from 'react'
import { useNavigate } from 'react-router-dom'
import ChatBot  from 'react-simple-chatbot'

function Chatbot() {

    const navigate = useNavigate()
    const goToPage = () => {
        navigate('/empresa')
        return <p>Go to empresa</p>
    }

    const steps = [
        {
            id: '1',
            message: 'En qué puedo ayudarte?',
            trigger: '2',
        },
        {
            id: '2',
            options:[
                {value : 1, label : 'acerca de pagos', trigger : '3'},
                {value : 2, label : 'acerca de mi cuenta', trigger : '4'},
                {value : 3, label : 'información de la empresa', trigger: '5'},
            ],
        },
        {
            id : '3',
            options:[
                {value : 1, label : 'tipo de tarjetas para pagar', trigger : '1'},
                {value : 2, label: 'la compra es segura?', trigger : '1'},
            ],
        },
        {
            id : '4',
            options:[
                {value : 1, label : 'quienes pueden ver mi perfil?', trigger : '1'},
                {value : 2, label : 'para que quieren mi información?', trigger : '1'},
            ],
        },
        {
            id : '5',
            component: <goToPage />,
            trigger: '1',
        },
    ]

  return (
    <>
        <ChatBot steps={steps} floating headerTitle="Ecommerce CR chat bot"
        hideSubmitButton />
    </>
  )
}

export default Chatbot