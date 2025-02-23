import  { ReactNode } from 'react'

interface Props {
    children: ReactNode;
    onClose: () => void;
}
const Alert = ({children, onClose}: Props) => {
  return (
    <div className='alert alert-primary alert-dissmissible d-flex justify-content-between align-items-center'>{children}
      <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close" onClick={onClose}></button>
    </div>
    
  )
}

export default Alert