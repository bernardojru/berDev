import { CheckCircle } from 'phosphor-react'
import { ButtonForm } from '../ButtonForm'
import {SucessFormContainer} from './styles'

export function SucessForm () {
    return (
        <SucessFormContainer>
            <CheckCircle size={100} weight="regular" color='#6866FB' />
            <ButtonForm>Feedback enviado!</ButtonForm>
        </SucessFormContainer>
    )
}