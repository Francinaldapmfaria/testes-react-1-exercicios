
import Calculator from "../components/Calculator"
import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"

describe("Calculator",  () =>{

    //exercicio 1
    test("Garanta em pelo menos um teste que a aplicação é renderizada corretamente com os dígitos de operações +, -, *, e /.", () => {

        const user = userEvent.setup()

        
        render(<Calculator/>)

        screen.logTestingPlaygroundURL()

        const buttonSum = screen.getByRole('button',
         { name: /\+/i })

         const buttonSub = screen.getByRole('button',
         { name: /\+/i })

         const buttonMult = screen.getByRole('button',
         { name: /\+/i })

         const buttonDiv = screen.getByRole('button',
         { name: /\+/i })

         expect(buttonSum).toBeInTheDocument()
         expect(buttonSub).toBeInTheDocument()
         expect(buttonMult).toBeInTheDocument()
         expect(buttonDiv).toBeInTheDocument()


    })

         //exercicio 2
    test("Garanta em pelo menos dois testes que a multiplicação está funcionando corretamente. ", async () => {

        const user = userEvent.setup()

        
        render(<Calculator/>)

        screen.logTestingPlaygroundURL()

        const buttonFor = screen. getByRole('button', 
        { name: /4/i })

        const buttonDiv = screen. getByRole('button', 
        { name: /\//i })

        const buttonTwo = screen. getByRole('button', 
        { name: /2/i })
        
        const buttonEqual = screen. getByRole('button', 
        { name: /=/i })

        await user.click(buttonFor)
        await user.click(buttonDiv)
        await user.click(buttonTwo)
        await user.click(buttonEqual)

        const value = screen.getByTestId("result")
        screen.debug()
        expect(value).toHaveTextContent("2")

    })

   
    test("Garanta em pelo menos dois testes que a multiplicação está funcionando corretamente. ", async () => {

        const user = userEvent.setup()

        
        render(<Calculator/>)

        screen.logTestingPlaygroundURL()

        const buttonThree = screen. getByRole('button', 
        { name: /3/i })

        const buttonMulti = screen. getByRole('button',
         { name: /\*/i })



        const buttonFive = screen. getByRole('button', 
        { name: /5/i })
        
        const buttonEqual = screen. getByRole('button', 
        { name: /=/i })

        await user.click(buttonThree)
        await user.click(buttonMulti)
        await user.click(buttonFive)
        await user.click(buttonEqual)

        const value = screen.getByTestId("result")
        screen.debug()
        expect(value).toHaveTextContent("15")

    })

        //exercicio 3
    test("Garanta em pelo menos um teste que concatenar operações está funcionando corretamente. ", async () => {

        const user = userEvent.setup()

        
        render(<Calculator/>)

        screen.logTestingPlaygroundURL()

        const buttonFive = screen. getByRole('button', 
        { name: /5/i })

        const buttonMulti = screen. getByRole('button',
         { name: /\*/i })

        const buttonTwo = screen. getByRole('button', 
        { name: /2/i })

        const buttonSum = screen. getByRole('button',
         { name: /\+/i })


        const buttonOne = screen. getByRole('button', 
        { name: /1/i })

        const buttonZero = screen. getByRole('button', 
        { name: /0/i })
        
        const buttonEqual = screen. getByRole('button', 
        { name: /=/i })

        await user.click(buttonFive)
        await user.click(buttonMulti)
        await user.click(buttonTwo)
        await user.click(buttonSum)
        await user.click(buttonOne)
        await user.click(buttonZero)
        await user.click(buttonEqual)

        const value = screen.getByTestId("result")
        screen.debug()
        expect(value).toHaveTextContent("20")

    })
})