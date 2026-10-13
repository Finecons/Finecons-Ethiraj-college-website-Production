import React from 'react'

const FooterPage = () => {
    return (
        <div>
            <footer class="text-center bg-body-tertiary" style={{width:"100$"}}>
                {/* <!-- Grid container --> */}

                {/* <!-- Grid container --> */}

                {/* <!-- Copyright --> */}
                <hr style={{ margin: '0 auto' ,width:"100%",textAlign:"center"}} />
                <div
                    class="text-center p-3"
                    style={{ backgroundColor: 'var(--footer-bgcolor)' ,fontSize:"14px"}}
                >
                    © 2024 developed by  
                    <a class="text-body" href="https://cygnusa.in/"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{pr:1}}

                    >   CYGNUSA  </a>
                      Technologies
                </div>

                {/* <!-- Copyright --> */}
            </footer>
        </div>
    )
}

export default FooterPage