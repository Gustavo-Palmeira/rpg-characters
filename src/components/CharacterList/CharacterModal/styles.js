import {
  Card as MuiCard,
  CardHeader as MuiCardHeader,
  Modal as MuiModal,
  styled,
} from '@mui/material'

export const Modal = styled(MuiModal)`
  display: flex;
  align-items: center;
  justify-content: center;
`

export const Card = styled(MuiCard)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 20px;
  padding: 20px;
  width: 60%;
  overflow-y: auto;
  height: 90vh;
`

export const CardHeader = styled(MuiCardHeader)`
  margin-top: 80px;

  @media (max-width: 520px) {
    margin-top: 120px;
  }
`
