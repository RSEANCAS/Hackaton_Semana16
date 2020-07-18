<template>
    <footer class="footer">
        <div class="container">
            <section class="info">
                <section class="logo">
                    <img src="../assets/logo.svg" />
                </section>
                <section class="links">
                    <h3>Features</h3>
                    <ul>
                    <li><a href="">Link Shortening</a></li>
                    <li><a href="">Branded Links</a></li>
                    <li><a href="">Analytics</a></li>
                    </ul>
                </section>
                <section class="links">
                    <h3>Resources</h3>
                    <ul>
                    <li><a href="">Blog</a></li>
                    <li><a href="">Developers</a></li>
                    <li><a href="">Support</a></li>
                    </ul>
                </section>
                <section class="links">
                    <h3>Company</h3>
                    <ul>
                    <li><a href="">About</a></li>
                    <li><a href="">Our Team</a></li>
                    <li><a href="">Careers</a></li>
                    <li><a href="">Contact</a></li>
                    </ul>
                </section>
                <section class="social">
                    <i class="fab fa-facebook-square"></i>
                    <i class="fab fa-twitter"></i>
                    <i class="fab fa-pinterest"></i>
                    <i class="fab fa-instagram"></i>
                </section>
            </section>
            <section class="development-by">
                Desarrollado por - <a href="javascript:void(0);">RONALD SEANCAS</a>
            </section>
        </div>
    </footer>
</template>


<style lang="scss">
#app{
    .footer {
        position: absolute;
        bottom: 0;
        width: 100%;
        height: 160px;
        background-color: #2F2F2F;
        &>.container{
            width: var(--width);
            &>.info{
                display: grid;
                grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
                &> * {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    &> h3{
                        color: white;
                    }
                    &> ul li a{
                        color: #aaa;
                    }
                }
            }
            &>.development-by{
                display: flex;
                justify-content: center;
                margin-top: 10px;
                color: white;
                &>a{
                    margin-left: 5px;
                    color: white;
                }
            }
        }
    }
}
</style>