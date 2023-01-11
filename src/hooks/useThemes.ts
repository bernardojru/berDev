import {ThemesContext} from '../contexts/ThemesContext'
import { useContext } from 'react'

export function useThemes () {
    return useContext(ThemesContext)
}