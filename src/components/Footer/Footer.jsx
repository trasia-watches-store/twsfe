import './Footer.css'

export default function Footer(){
    return(
        <footer>
            <h4 className='text-footer'>Created by:</h4>
            <div className='img-wrapper'>
            <a href="https://github.com/hnhtran"><img src="/images/tranGH.jpeg" className='creator' alt="githublogo" /></a></div> 
        </footer>
    )
}