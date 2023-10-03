import React from 'react'
import "./Home.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

function Home() {
    return (
        <div className="conteudo-central">
            <div className="div-publicar">
                <img className="img-conta-publicar" src="https://as1.ftcdn.net/v2/jpg/03/46/83/96/1000_F_346839683_6nAPzbhpSkIpb8pmAwufkC7c5eD7wYws.jpg" /><input type="search" dir="ltr" aria-autocomplete="list" aria-expanded="false" aria-label="No que você está pensando, Usuario??" role="combobox" placeholder="No que você está pensando, Usuario??" autoComplete="off" spellCheck="false" aria-invalid="false" defaultValue className="input-pensamento" />
                <div className="botoes-publicar mt-2">
                    <div className="div-botao-publicar link-publicar">
                        <svg style={{ fill: '#blue' }} viewBox="0 0 24 24" width="1em" height="1em" className="icone-publicar">
                            <g fillRule="evenodd" transform="translate(-444 -156)">
                                <g>
                                    <path d="m96.968 22.425-.648.057a2.692 2.692 0 0 1-1.978-.625 2.69 2.69 0 0 1-.96-1.84L92.01 4.32a2.702 2.702 0 0 1 .79-2.156c.47-.472 1.111-.731 1.774-.79l2.58-.225a.498.498 0 0 1 .507.675 4.189 4.189 0 0 0-.251 1.11L96.017 18.85a4.206 4.206 0 0 0 .977 3.091s.459.364-.026.485m8.524-16.327a1.75 1.75 0 1 1-3.485.305 1.75 1.75 0 0 1 3.485-.305m5.85 3.011a.797.797 0 0 0-1.129-.093l-3.733 3.195a.545.545 0 0 0-.062.765l.837.993a.75.75 0 1 1-1.147.966l-2.502-2.981a.797.797 0 0 0-1.096-.12L99 14.5l-.5 4.25c-.06.674.326 2.19 1 2.25l11.916 1.166c.325.026 1-.039 1.25-.25.252-.21.89-.842.917-1.166l.833-8.084-3.073-3.557z" transform="translate(352 156.5)" />
                                    <path fillRule="nonzero" d="m111.61 22.963-11.604-1.015a2.77 2.77 0 0 1-2.512-2.995L98.88 3.09A2.77 2.77 0 0 1 101.876.58l11.603 1.015a2.77 2.77 0 0 1 2.513 2.994l-1.388 15.862a2.77 2.77 0 0 1-2.994 2.513zm.13-1.494.082.004a1.27 1.27 0 0 0 1.287-1.154l1.388-15.862a1.27 1.27 0 0 0-1.148-1.37l-11.604-1.014a1.27 1.27 0 0 0-1.37 1.15l-1.387 15.86a1.27 1.27 0 0 0 1.149 1.37l11.603 1.016z" transform="translate(352 156.5)" />
                                </g>
                            </g>
                        </svg>Fotos/Vídeos
                    </div>
                    <div className="div-botao-publicar link-publicar" style={{ textAlign: 'center' }}>
                        <svg style={{ fill: '#4254f3' }} viewBox="0 0 24 24" width="1em" height="1em" className="icone-publicar">
                            <button></button>
                        </svg>Publicar
                    </div>
                </div>
            </div>
            {/* PUBLICAÇÃO */}
            <div className="div-publicacao">
                <div className="menu-publicacao">
                    <svg viewBox="0 0 20 20" width={20} height={20} className="logo-menu-publicacao">
                        <g fillRule="evenodd" transform="translate(-446 -350)">
                            <path d="M458 360a2 2 0 1 1-4 0 2 2 0 0 1 4 0m6 0a2 2 0 1 1-4 0 2 2 0 0 1 4 0m-12 0a2 2 0 1 1-4 0 2 2 0 0 1 4 0">
                            </path>
                        </g>
                    </svg>
                </div>
                <div className="conta-publicacao">{/*FOTO DE PERFIL, NOME E DATA*/}
                    <h6><img className="alinhar-conteudo-publicacao img-conta-publicacao mr-2" style={{alignItems:'left', alignContent:'left', textAlign:'left'}} src="https://imgs.search.brave.com/4sCgV0DVB4xcE_F1eMPbeLYnpScr00pYyvEiJQsyKK8/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzL2YzL2Q2/L2E2L2YzZDZhNmM5/ZGZlY2I4MTg3Njc1/YmMxM2Q1NDY2Nzcw/LmpwZw" /><span className="nome-publicacao">Gabriel Henrique Miletta</span><br/><span className="text-muted text-data-publicacao"> <br/>11 mês
                        atrás <svg viewBox="0 0 16 16" width="1em" height="1em" className="logo-publico" title="Compartilhado com Público">
                            <title>Compartilhado com Público</title>
                            <g fillRule="evenodd" transform="translate(-448 -544)">
                                <g>
                                    <path d="M109.5 408.5c0 3.23-2.04 5.983-4.903 7.036l.07-.036c1.167-1 1.814-2.967 2-3.834.214-1 .303-1.3-.5-1.96-.31-.253-.677-.196-1.04-.476-.246-.19-.356-.59-.606-.73-.594-.337-1.107.11-1.954.223a2.666 2.666 0 0 1-1.15-.123c-.007 0-.007 0-.013-.004l-.083-.03c-.164-.082-.077-.206.006-.36h-.006c.086-.17.086-.376-.05-.529-.19-.214-.54-.214-.804-.224-.106-.003-.21 0-.313.004l-.003-.004c-.04 0-.084.004-.124.004h-.037c-.323.007-.666-.034-.893-.314-.263-.353-.29-.733.097-1.09.28-.26.863-.8 1.807-.22.603.37 1.166.667 1.666.5.33-.11.48-.303.094-.87a1.128 1.128 0 0 1-.214-.73c.067-.776.687-.84 1.164-1.2.466-.356.68-.943.546-1.457-.106-.413-.51-.873-1.28-1.01a7.49 7.49 0 0 1 6.524 7.434" transform="translate(354 143.5)" />
                                    <path d="M104.107 415.696A7.498 7.498 0 0 1 94.5 408.5a7.48 7.48 0 0 1 3.407-6.283 5.474 5.474 0 0 0-1.653 2.334c-.753 2.217-.217 4.075 2.29 4.075.833 0 1.4.561 1.333 2.375-.013.403.52 1.78 2.45 1.89.7.04 1.184 1.053 1.33 1.74.06.29.127.65.257.97a.174.174 0 0 0 .193.096" transform="translate(354 143.5)" />
                                    <path fillRule="nonzero" d="M110 408.5a8 8 0 1 1-16 0 8 8 0 0 1 16 0zm-1 0a7 7 0 1 0-14 0 7 7 0 0 0 14 0z" transform="translate(354 143.5)" />
                                </g>
                            </g>
                        </svg></span></h6>
                </div>
                <div className="div-texto-publicacao alinhar-conteudo-publicacao">{/*TEXTO DA PUBLICACAO*/}
                    <p>This batlle is fire🔥🔥🔥!!!!</p>
                </div>
                <div className="img-publicacao">{/*IMAGEM DA PUBLICACAO*/}
                    <img className="img-publicacao" src="https://imgs.search.brave.com/Ge71Gx-YYm24cT5ta8vEel-I9yxHDWOzGgPT8kbip9o/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9iZWVi/b20uY29tL3dwLWNv/bnRlbnQvdXBsb2Fk/cy8yMDIzLzA1L0dv/am8tdnMtc3VrdW5h/LmpwZz93PTYyOA" />
                </div>
               
                <div clas="div-comentar" style={{ display: 'flex', justifyContent:'space-around', borderTop: '1px solid #e4e6eb', borderBottom: '1px solid #e4e6eb', marginTop: '12px', padding: '2px 0 2px 0' }}>
                    <div className="curtir">
                        <i data-visualcompletion="css-img" className="hu5pjgll m6k467ps" style={{ backgroundImage: 'url("https://static.xx.fbcdn.net/rsrc.php/v3/yd/r/E2BXhjYXUP-.png?_nc_eui2=AeGjJv-PSMg1H14niQWZDIoFiHVSOZTF6ReIdVI5lMXpF_PLOQ5iqyYFcmzSUn5bi7eLd9V9a0HRV5gbufZqZR2f")', backgroundPosition: '0px -222px', backgroundSize: 'auto', width: '18px', height: '18px', backgroundRepeat: 'no-repeat', display: 'inline-block', WebkitFilter: '#65676b!important' }} />
                        Curtir
                    </div>
                    <div className="comentar">
                        <i data-visualcompletion="css-img" className="hu5pjgll m6k467ps" style={{ backgroundImage: 'url("https://static.xx.fbcdn.net/rsrc.php/v3/yd/r/E2BXhjYXUP-.png?_nc_eui2=AeGjJv-PSMg1H14niQWZDIoFiHVSOZTF6ReIdVI5lMXpF_PLOQ5iqyYFcmzSUn5bi7eLd9V9a0HRV5gbufZqZR2f")', backgroundPosition: '0px -184px', backgroundSize: 'auto', width: '18px', height: '18px', backgroundRepeat: 'no-repeat', display: 'inline-block' }} />
                        Comentar
                    </div>
                    <div className="compartilhar">
                        <i data-visualcompletion="css-img" className="hu5pjgll m6k467ps" style={{ backgroundImage: 'url("https://static.xx.fbcdn.net/rsrc.php/v3/yd/r/E2BXhjYXUP-.png?_nc_eui2=AeGjJv-PSMg1H14niQWZDIoFiHVSOZTF6ReIdVI5lMXpF_PLOQ5iqyYFcmzSUn5bi7eLd9V9a0HRV5gbufZqZR2f")', backgroundPosition: '0px -241px', backgroundSize: 'auto', width: '18px', height: '18px', backgroundRepeat: 'no-repeat', display: 'inline-block' }} />
                        Compartilhar
                    </div>
                </div>
            </div>
            {/* PUBLICAÇÃO */}
            {/* PUBLICAÇÃO */}
            <div className="div-publicacao">
                <div className="menu-publicacao">{/* MENU DIREIRO DA PUBLICACAO*/}
                    <svg viewBox="0 0 20 20" width={20} height={20} className="logo-menu-publicacao">
                        <g fillRule="evenodd" transform="translate(-446 -350)">
                            <path d="M458 360a2 2 0 1 1-4 0 2 2 0 0 1 4 0m6 0a2 2 0 1 1-4 0 2 2 0 0 1 4 0m-12 0a2 2 0 1 1-4 0 2 2 0 0 1 4 0">
                            </path>
                        </g>
                    </svg>
                </div>
                <div className="conta-publicacao">{/*FOTO DE PERFIL, NOME E DATA*/}
                    <h6><img className="alinhar-conteudo-publicacao img-conta-publicacao mr-2"style={{alignItems:'left', alignContent:'left', textAlign:'left'}} src="https://imgs.search.brave.com/D7Z2wIOdgxK58Bb6Rtc8BG3LKsbbkT-s3iAEIoKIFLc/rs:fit:500:0:0/g:ce/aHR0cDovL2ltYWdl/cy51bmN5Yy5vcmcv/cHQvdGh1bWIvOC84/YS9Ib21lbV9nb2lh/YmEuanBnLzIwMHB4/LUhvbWVtX2dvaWFi/YS5qcGc" /><span className="nome-publicacao"> I_LIke_Applesxd</span><span className="text-muted text-data-publicacao"><br/> <br/>19 min
                        <svg viewBox="0 0 16 16" width="1em" height="1em" className="logo-publico" title="Compartilhado com Público">
                            <title>Compartilhado com Público</title>
                            <g fillRule="evenodd" transform="translate(-448 -544)">
                                <g>
                                    <path d="M109.5 408.5c0 3.23-2.04 5.983-4.903 7.036l.07-.036c1.167-1 1.814-2.967 2-3.834.214-1 .303-1.3-.5-1.96-.31-.253-.677-.196-1.04-.476-.246-.19-.356-.59-.606-.73-.594-.337-1.107.11-1.954.223a2.666 2.666 0 0 1-1.15-.123c-.007 0-.007 0-.013-.004l-.083-.03c-.164-.082-.077-.206.006-.36h-.006c.086-.17.086-.376-.05-.529-.19-.214-.54-.214-.804-.224-.106-.003-.21 0-.313.004l-.003-.004c-.04 0-.084.004-.124.004h-.037c-.323.007-.666-.034-.893-.314-.263-.353-.29-.733.097-1.09.28-.26.863-.8 1.807-.22.603.37 1.166.667 1.666.5.33-.11.48-.303.094-.87a1.128 1.128 0 0 1-.214-.73c.067-.776.687-.84 1.164-1.2.466-.356.68-.943.546-1.457-.106-.413-.51-.873-1.28-1.01a7.49 7.49 0 0 1 6.524 7.434" transform="translate(354 143.5)" />
                                    <path d="M104.107 415.696A7.498 7.498 0 0 1 94.5 408.5a7.48 7.48 0 0 1 3.407-6.283 5.474 5.474 0 0 0-1.653 2.334c-.753 2.217-.217 4.075 2.29 4.075.833 0 1.4.561 1.333 2.375-.013.403.52 1.78 2.45 1.89.7.04 1.184 1.053 1.33 1.74.06.29.127.65.257.97a.174.174 0 0 0 .193.096" transform="translate(354 143.5)" />
                                    <path fillRule="nonzero" d="M110 408.5a8 8 0 1 1-16 0 8 8 0 0 1 16 0zm-1 0a7 7 0 1 0-14 0 7 7 0 0 0 14 0z" transform="translate(354 143.5)" />
                                </g>
                            </g>
                        </svg></span></h6>
                </div>
                <div className="div-texto-publicacao alinhar-conteudo-publicacao">{/*TEXTO DA PUBLICACAO*/}
                    <p>LOL!!!</p>
                </div>
                <div className="img-publicacao">{/*IMAGEM DA PUBLICACAO*/}
                    <img className="img-publicacao" src="https://imgs.search.brave.com/P6VSf65PVW8ZK3xkFbiKX1XxMybrFvpWJKxKfo20xfk/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9pLmlt/Z2ZsaXAuY29tLzIv/N3ZrcjVpLmpwZw" />
                </div>
              
                <div clas="div-comentar" style={{ display: 'flex', justifyContent: 'space-around', borderTop: '1px solid #e4e6eb', borderBottom: '1px solid #e4e6eb', marginTop: '12px', padding: '2px 0 2px 0' }}>
                    <div className="curtir">
                        <i data-visualcompletion="css-img" className="hu5pjgll m6k467ps" style={{ backgroundImage: 'url("https://static.xx.fbcdn.net/rsrc.php/v3/yd/r/E2BXhjYXUP-.png?_nc_eui2=AeGjJv-PSMg1H14niQWZDIoFiHVSOZTF6ReIdVI5lMXpF_PLOQ5iqyYFcmzSUn5bi7eLd9V9a0HRV5gbufZqZR2f")', backgroundPosition: '0px -222px', backgroundSize: 'auto', width: '18px', height: '18px', backgroundRepeat: 'no-repeat', display: 'inline-block', WebkitFilter: '#65676b!important' }} />
                        Curtir
                    </div>
                    <div className="comentar">
                        <i data-visualcompletion="css-img" className="hu5pjgll m6k467ps" style={{ backgroundImage: 'url("https://static.xx.fbcdn.net/rsrc.php/v3/yd/r/E2BXhjYXUP-.png?_nc_eui2=AeGjJv-PSMg1H14niQWZDIoFiHVSOZTF6ReIdVI5lMXpF_PLOQ5iqyYFcmzSUn5bi7eLd9V9a0HRV5gbufZqZR2f")', backgroundPosition: '0px -184px', backgroundSize: 'auto', width: '18px', height: '18px', backgroundRepeat: 'no-repeat', display: 'inline-block' }} />
                        Comentar
                    </div>
                    <div className="compartilhar">
                        <i data-visualcompletion="css-img" className="hu5pjgll m6k467ps" style={{ backgroundImage: 'url("https://static.xx.fbcdn.net/rsrc.php/v3/yd/r/E2BXhjYXUP-.png?_nc_eui2=AeGjJv-PSMg1H14niQWZDIoFiHVSOZTF6ReIdVI5lMXpF_PLOQ5iqyYFcmzSUn5bi7eLd9V9a0HRV5gbufZqZR2f")', backgroundPosition: '0px -241px', backgroundSize: 'auto', width: '18px', height: '18px', backgroundRepeat: 'no-repeat', display: 'inline-block' }} />
                        Compartilhar
                    </div>
                </div>
            </div>
            {/* PUBLICAÇÃO */}
            {/* PUBLICAÇÃO */}
            <div className="div-publicacao">
                <div className="menu-publicacao">{/* MENU DIREIRO DA PUBLICACAO*/}
                    <svg viewBox="0 0 20 20" width={20} height={20} className="logo-menu-publicacao">
                        <g fillRule="evenodd" transform="translate(-446 -350)">
                            <path d="M458 360a2 2 0 1 1-4 0 2 2 0 0 1 4 0m6 0a2 2 0 1 1-4 0 2 2 0 0 1 4 0m-12 0a2 2 0 1 1-4 0 2 2 0 0 1 4 0">
                            </path>
                        </g>
                    </svg>
                </div>
                <div className="conta-publicacao">{/*FOTO DE PERFIL, NOME E DATA*/}
                    <h6><img className="alinhar-conteudo-publicacao img-conta-publicacao mr-2"style={{alignItems:'left', alignContent:'left', textAlign:'left'}} src="https://imgs.search.brave.com/Oehr665XUsh4dwJKjs90E-RpbSICI9dHnSZHAUW0HF0/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9wMTYt/c2lnbi12YS50aWt0/b2tjZG4uY29tL3Rv/cy1tYWxpdmEtcC0w/MDY4L29RQ0FkQkQ1/Z0Zud1JUUUtYVmNK/ZVRMQmJSSkFza0lF/bHhFM2VIfnRwbHYt/cGhvdG9tb2RlLXpv/b21jb3Zlcjo0ODA6/NDgwLmpwZWc_eC1l/eHBpcmVzPTE2OTY0/NTMyMDAmeC1zaWdu/YXR1cmU9T2JCWDJG/cWlwaUx1VTIvVlRX/VlBkYlRud3JnPQ" /><span className="nome-publicacao"> This is Elon MUsk</span><span className="text-muted text-data-publicacao"><br /> 20 min <svg viewBox="0 0 16 16" width="1em" height="1em" className="logo-publico" title="Compartilhado com Público">
                        <title>Compartilhado com Público</title>
                        <g fillRule="evenodd" transform="translate(-448 -544)">
                            <g>
                                <path d="M109.5 408.5c0 3.23-2.04 5.983-4.903 7.036l.07-.036c1.167-1 1.814-2.967 2-3.834.214-1 .303-1.3-.5-1.96-.31-.253-.677-.196-1.04-.476-.246-.19-.356-.59-.606-.73-.594-.337-1.107.11-1.954.223a2.666 2.666 0 0 1-1.15-.123c-.007 0-.007 0-.013-.004l-.083-.03c-.164-.082-.077-.206.006-.36h-.006c.086-.17.086-.376-.05-.529-.19-.214-.54-.214-.804-.224-.106-.003-.21 0-.313.004l-.003-.004c-.04 0-.084.004-.124.004h-.037c-.323.007-.666-.034-.893-.314-.263-.353-.29-.733.097-1.09.28-.26.863-.8 1.807-.22.603.37 1.166.667 1.666.5.33-.11.48-.303.094-.87a1.128 1.128 0 0 1-.214-.73c.067-.776.687-.84 1.164-1.2.466-.356.68-.943.546-1.457-.106-.413-.51-.873-1.28-1.01a7.49 7.49 0 0 1 6.524 7.434" transform="translate(354 143.5)" />
                                <path d="M104.107 415.696A7.498 7.498 0 0 1 94.5 408.5a7.48 7.48 0 0 1 3.407-6.283 5.474 5.474 0 0 0-1.653 2.334c-.753 2.217-.217 4.075 2.29 4.075.833 0 1.4.561 1.333 2.375-.013.403.52 1.78 2.45 1.89.7.04 1.184 1.053 1.33 1.74.06.29.127.65.257.97a.174.174 0 0 0 .193.096" transform="translate(354 143.5)" />
                                <path fillRule="nonzero" d="M110 408.5a8 8 0 1 1-16 0 8 8 0 0 1 16 0zm-1 0a7 7 0 1 0-14 0 7 7 0 0 0 14 0z" transform="translate(354 143.5)" />
                            </g>
                        </g>
                    </svg></span></h6>
                </div>
                <div className="div-texto-publicacao alinhar-conteudo-publicacao">{/*TEXTO DA PUBLICACAO*/}
                    <p>Lets go Work!!!!</p>
                </div>
                <div className="img-publicacao">{/*IMAGEM DA PUBLICACAO*/}
                    <img className="img-publicacao" src="https://imgs.search.brave.com/lfzdqokIzCO2pjZn7mNv0zw94ZX8bGpJ1rCAYF4Bd8I/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS50ZW5vci5jb20v/eC1ITUtkbTRLQW9B/QUFBZC9mb2d1ZXRl/LXBvbnRvLWZvY2Fs/LWZvZ3VldGUuZ2lm.jpeg" />
                </div>
                {/*CURTIR COMENTAR E COMPARTILHAR*/}
                <div clas="div-comentar" style={{ display: 'flex', justifyContent: 'space-around', borderTop: '1px solid #e4e6eb', borderBottom: '1px solid #e4e6eb', marginTop: '12px', padding: '2px 0 2px 0' }}>
                    <div className="curtir">
                        <i data-visualcompletion="css-img" className="hu5pjgll m6k467ps" style={{ backgroundImage: 'url("https://static.xx.fbcdn.net/rsrc.php/v3/yd/r/E2BXhjYXUP-.png?_nc_eui2=AeGjJv-PSMg1H14niQWZDIoFiHVSOZTF6ReIdVI5lMXpF_PLOQ5iqyYFcmzSUn5bi7eLd9V9a0HRV5gbufZqZR2f")', backgroundPosition: '0px -222px', backgroundSize: 'auto', width: '18px', height: '18px', backgroundRepeat: 'no-repeat', display: 'inline-block', WebkitFilter: '#65676b!important' }} />
                        Curtir
                    </div>
                    <div className="comentar">
                        <i data-visualcompletion="css-img" className="hu5pjgll m6k467ps" style={{ backgroundImage: 'url("https://static.xx.fbcdn.net/rsrc.php/v3/yd/r/E2BXhjYXUP-.png?_nc_eui2=AeGjJv-PSMg1H14niQWZDIoFiHVSOZTF6ReIdVI5lMXpF_PLOQ5iqyYFcmzSUn5bi7eLd9V9a0HRV5gbufZqZR2f")', backgroundPosition: '0px -184px', backgroundSize: 'auto', width: '18px', height: '18px', backgroundRepeat: 'no-repeat', display: 'inline-block' }} />
                        Comentar
                    </div>
                    <div className="compartilhar">
                        <i data-visualcompletion="css-img" className="hu5pjgll m6k467ps" style={{ backgroundImage: 'url("https://static.xx.fbcdn.net/rsrc.php/v3/yd/r/E2BXhjYXUP-.png?_nc_eui2=AeGjJv-PSMg1H14niQWZDIoFiHVSOZTF6ReIdVI5lMXpF_PLOQ5iqyYFcmzSUn5bi7eLd9V9a0HRV5gbufZqZR2f")', backgroundPosition: '0px -241px', backgroundSize: 'auto', width: '18px', height: '18px', backgroundRepeat: 'no-repeat', display: 'inline-block' }} />
                        Compartilhar
                    </div>
                </div>
            </div>
            {/* PUBLICAÇÃO */}
            <div className="div-publicacao">
                <div className="menu-publicacao">{/* MENU DIREIRO DA PUBLICACAO*/}
                    <svg viewBox="0 0 20 20" width={20} height={20} className="logo-menu-publicacao">
                        <g fillRule="evenodd" transform="translate(-446 -350)">
                            <path d="M458 360a2 2 0 1 1-4 0 2 2 0 0 1 4 0m6 0a2 2 0 1 1-4 0 2 2 0 0 1 4 0m-12 0a2 2 0 1 1-4 0 2 2 0 0 1 4 0">
                            </path>
                        </g>
                    </svg>
                </div>
                <div className="conta-publicacao">{/*FOTO DE PERFIL, NOME E DATA*/}
                    <h6><img className="alinhar-conteudo-publicacao img-conta-publicacao mr-2"style={{alignItems:'left', alignContent:'left', textAlign:'left'}} src="https://imgs.search.brave.com/KAGQesx_aYxPz8nXu-jgvqNcKYgRMjgxORtF-n_sUNM/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9odHRw/Mi5tbHN0YXRpYy5j/b20vRF9OUV9OUF83/MTc0ODYtTUxBNTA1/MTE4MDI3MzdfMDYy/MDIyLVQud2VicA" /><span className="nome-publicacao"> Pichau_Br</span><span className="text-muted text-data-publicacao"><br />  Há 1 semana <svg viewBox="0 0 16 16" width="1em" height="1em" className="logo-publico" title="Compartilhado com Público">
                        <title>Compartilhado com Público</title>
                        <g fillRule="evenodd" transform="translate(-448 -544)">
                            <g>
                                <path d="M109.5 408.5c0 3.23-2.04 5.983-4.903 7.036l.07-.036c1.167-1 1.814-2.967 2-3.834.214-1 .303-1.3-.5-1.96-.31-.253-.677-.196-1.04-.476-.246-.19-.356-.59-.606-.73-.594-.337-1.107.11-1.954.223a2.666 2.666 0 0 1-1.15-.123c-.007 0-.007 0-.013-.004l-.083-.03c-.164-.082-.077-.206.006-.36h-.006c.086-.17.086-.376-.05-.529-.19-.214-.54-.214-.804-.224-.106-.003-.21 0-.313.004l-.003-.004c-.04 0-.084.004-.124.004h-.037c-.323.007-.666-.034-.893-.314-.263-.353-.29-.733.097-1.09.28-.26.863-.8 1.807-.22.603.37 1.166.667 1.666.5.33-.11.48-.303.094-.87a1.128 1.128 0 0 1-.214-.73c.067-.776.687-.84 1.164-1.2.466-.356.68-.943.546-1.457-.106-.413-.51-.873-1.28-1.01a7.49 7.49 0 0 1 6.524 7.434" transform="translate(354 143.5)" />
                                <path d="M104.107 415.696A7.498 7.498 0 0 1 94.5 408.5a7.48 7.48 0 0 1 3.407-6.283 5.474 5.474 0 0 0-1.653 2.334c-.753 2.217-.217 4.075 2.29 4.075.833 0 1.4.561 1.333 2.375-.013.403.52 1.78 2.45 1.89.7.04 1.184 1.053 1.33 1.74.06.29.127.65.257.97a.174.174 0 0 0 .193.096" transform="translate(354 143.5)" />
                                <path fillRule="nonzero" d="M110 408.5a8 8 0 1 1-16 0 8 8 0 0 1 16 0zm-1 0a7 7 0 1 0-14 0 7 7 0 0 0 14 0z" transform="translate(354 143.5)" />
                            </g>
                        </g>
                    </svg></span></h6>
                </div>
                <div className="div-texto-publicacao alinhar-conteudo-publicacao">{/*TEXTO DA PUBLICACAO*/}
                    <p>Compre agora seu novo Computador Pichau Gamer :D !!!!</p><br/>
                    <p><a href='https://www.pichau.com.br/computador-pichau-gamer-intel-i3-10100f-radeon-rx-5500-xt-8gb-16gb-ddr4-ssd-480gb-42282'> Clique aqui para mais informacões :D</a></p>
                </div>
                <div className="img-publicacao">{/*IMAGEM DA PUBLICACAO*/}
                    <img className="img-publicacao" src="https://imgs.search.brave.com/YbIBz8uUopVZ8hRfppjFz90uOighxoeFmZT9wLsmU3E/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9odHRw/Mi5tbHN0YXRpYy5j/b20vRF9OUV9OUF82/NDgxMjgtTUxCNTQ4/Njc4NjcxNzRfMDQy/MDIzLVcud2VicA" />
                </div>
                {/*CURTIR COMENTAR E COMPARTILHAR*/}
                <div clas="div-comentar" style={{ display: 'flex', justifyContent: 'space-around', borderTop: '1px solid #e4e6eb', borderBottom: '1px solid #e4e6eb', marginTop: '12px', padding: '2px 0 2px 0' }}>
                    <div className="curtir">
                        <i data-visualcompletion="css-img" className="hu5pjgll m6k467ps" style={{ backgroundImage: 'url("https://static.xx.fbcdn.net/rsrc.php/v3/yd/r/E2BXhjYXUP-.png?_nc_eui2=AeGjJv-PSMg1H14niQWZDIoFiHVSOZTF6ReIdVI5lMXpF_PLOQ5iqyYFcmzSUn5bi7eLd9V9a0HRV5gbufZqZR2f")', backgroundPosition: '0px -222px', backgroundSize: 'auto', width: '18px', height: '18px', backgroundRepeat: 'no-repeat', display: 'inline-block', WebkitFilter: '#65676b!important' }} />
                        Curtir
                    </div>
                    <div className="comentar">
                        <i data-visualcompletion="css-img" className="hu5pjgll m6k467ps" style={{ backgroundImage: 'url("https://static.xx.fbcdn.net/rsrc.php/v3/yd/r/E2BXhjYXUP-.png?_nc_eui2=AeGjJv-PSMg1H14niQWZDIoFiHVSOZTF6ReIdVI5lMXpF_PLOQ5iqyYFcmzSUn5bi7eLd9V9a0HRV5gbufZqZR2f")', backgroundPosition: '0px -184px', backgroundSize: 'auto', width: '18px', height: '18px', backgroundRepeat: 'no-repeat', display: 'inline-block' }} />
                        Comentar
                    </div>
                    <div className="compartilhar">
                        <i data-visualcompletion="css-img" className="hu5pjgll m6k467ps" style={{ backgroundImage: 'url("https://static.xx.fbcdn.net/rsrc.php/v3/yd/r/E2BXhjYXUP-.png?_nc_eui2=AeGjJv-PSMg1H14niQWZDIoFiHVSOZTF6ReIdVI5lMXpF_PLOQ5iqyYFcmzSUn5bi7eLd9V9a0HRV5gbufZqZR2f")', backgroundPosition: '0px -241px', backgroundSize: 'auto', width: '18px', height: '18px', backgroundRepeat: 'no-repeat', display: 'inline-block' }} />
                        Compartilhar
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home