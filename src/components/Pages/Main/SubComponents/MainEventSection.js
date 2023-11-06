import { Link } from 'react-router-dom';

const MainEventSection = () => {
    return (             
        <section className='Main_EventSection'>
            <article className='FESTSURI_App_Intro'>
                <div className='Store_Interlock'>
                    <div className='Gradient_Box'>
                        <div className='Emoji_Box'>
                            <img src={require('../images/MainApp/Event_img.png')} alt='EventSmileImg'></img>
                        </div>
                    </div>
                    <div className='Suggest_Box'>
                        <div className='Logo_Box'>
                            <svg version="1.1" id="Layer_1"x="0px" y="0px" viewBox="0 0 200 35.7">
                                <path d="M20.2,21.7H12v11.1H2.4v-30h19.7l-1.2,7.7H12v4h8.2V21.7z"/>
                                <path d="M44.2,21.5h-9.6v3.6h11.8v7.7H25v-30h21.1l-1.2,7.7H34.6v4h9.6C44.2,14.5,44.2,21.5,44.2,21.5z"/>
                                <path d="M49.2,32.3l1.4-7.9c2.9,0.7,5.6,1.1,8,1.1c1.2,0,2.3,0,3.2-0.1c0.9,0,1.7-0.1,2.5-0.2v-2.4L60,22.4c-1.9-0.2-3.6-0.5-4.9-1c-1.3-0.5-2.4-1.1-3.1-1.9c-0.8-0.8-1.3-1.7-1.7-2.8c-0.3-1.1-0.5-2.4-0.5-3.9c0-2.1,0.2-3.8,0.6-5.1c0.4-1.4,1.1-2.5,2-3.3S54.5,3,56,2.6c1.5-0.3,3.3-0.5,5.4-0.5c4.2,0,8.1,0.4,11.5,1.2L71.7,11c-3-0.5-5.4-0.7-7.2-0.7c-1.8,0-3.3,0.1-4.6,0.2v2.4l3.4,0.3c2.1,0.2,3.9,0.6,5.3,1.1s2.6,1.1,3.4,1.9c0.9,0.8,1.5,1.7,1.8,2.8c0.4,1.1,0.5,2.3,0.5,3.8c0,2-0.3,3.7-0.8,5.1c-0.5,1.4-1.2,2.4-1.9,3.2c-0.6,0.6-1.4,1-2.3,1.4c-0.9,0.3-1.9,0.6-2.9,0.7c-1,0.2-2,0.3-3.1,0.3c-1,0-2,0.1-2.8,0.1c-2.1,0-4.1-0.1-6-0.3C52.8,33,51,32.7,49.2,32.3z"/>
                                <path d="M99.4,10.5h-7v22.3h-9.6V10.5h-7V2.8h23.5L99.4,10.5L99.4,10.5z"/>
                                <path d="M100.9,32.3l1.4-7.9c2.9,0.7,5.6,1.1,8,1.1c1.2,0,2.3,0,3.2-0.1s1.7-0.1,2.5-0.2v-2.4l-4.3-0.4c-1.9-0.2-3.6-0.5-4.9-1s-2.4-1.1-3.1-1.9c-0.8-0.8-1.3-1.7-1.7-2.8c-0.3-1.1-0.5-2.4-0.5-3.9c0-2.1,0.2-3.8,0.6-5.1c0.4-1.4,1.1-2.5,2-3.3s2.1-1.4,3.6-1.8c1.5-0.3,3.3-0.5,5.4-0.5c4.2,0,8.1,0.4,11.5,1.2l-1.2,7.7c-3-0.5-5.4-0.7-7.2-0.7c-1.8,0-3.3,0.1-4.6,0.2v2.4l3.4,0.3c2.1,0.2,3.9,0.6,5.3,1.1s2.6,1.1,3.4,1.9c0.9,0.8,1.5,1.7,1.8,2.8c0.4,1.1,0.5,2.3,0.5,3.8c0,2-0.3,3.7-0.8,5.1c-0.5,1.4-1.2,2.4-1.9,3.2c-0.6,0.6-1.4,1-2.3,1.4c-0.9,0.3-1.9,0.6-2.9,0.7c-1,0.2-2,0.3-3.1,0.3c-1,0-2,0.1-2.8,0.1c-2.1,0-4.1-0.1-6-0.3C104.5,33,102.7,32.7,100.9,32.3z"/>
                                <path d="M129,2.8h9.6v22.5h3.4c1.2,0,2.1-0.2,2.5-0.5s0.7-1,0.7-2.1v-20h9.6v16.8c0,2.6-0.2,4.7-0.5,6.5s-1,3.2-1.9,4.3s-2.3,1.9-3.9,2.4s-3.9,0.7-6.5,0.7c-2.7,0-4.8-0.2-6.5-0.7s-3-1.3-3.9-2.4c-0.9-1.1-1.6-2.5-1.9-4.3c-0.3-1.8-0.5-3.9-0.5-6.5V2.8H129z"/>
                                <path d="M179.8,22.8l5.2,10h-10.6l-3.9-8.9h-2.1v8.9h-9.6v-30H174c6.9,0,10.3,3.5,10.3,10.5C184.3,18.1,182.8,21.3,179.8,22.8zM170.7,10.5h-2.2v6h2.2c1.2,0,2-0.1,2.5-0.4c0.5-0.2,0.8-0.8,0.8-1.6v-2c0-0.9-0.3-1.4-0.8-1.6C172.7,10.6,171.9,10.5,170.7,10.5z"/>
                                <path d="M188.4,32.8v-30h9.6v30H188.4z"/>
                            </svg>
                        </div>
                        <div className='Text_Box'>
                            FESTSURI 맴버쉽<br/><span className='Text_HighLight'>더 많은 혜택</span><br/>지금 가입하세요.
                        </div>
                        <div className='Store_Link_Box'>
                            <div className='PlayStore_Btn'>
                                <a href='https://play.google.com/store/' target='_blank' rel="noreferrer">
                                    <svg width="30" height="33" viewBox="0 0 30 33">
                                        <path d="M14.0069 15.6992L0.128174 30.1418L0.130167 30.1506C0.556029 31.7185 2.01654 32.8734 3.75077 32.8734C4.44348 32.8734 5.09434 32.6896 5.65264 32.3674L5.69693 32.3413L21.3169 23.5018L14.0069 15.6992Z" fill="#EA4335"/>
                                        <path d="M28.0474 13.2409L28.0341 13.2323L21.2898 9.39844L13.6917 16.0282L21.3166 23.503L28.0254 19.7077C29.2014 19.0847 30 17.8694 30 16.4678C30 15.0748 29.2125 13.8661 28.0474 13.2412V13.2409Z" fill="#FBBC04"/>
                                        <path d="M0.127119 2.73047C0.0423835 3.03859 -0.000374535 3.35675 2.47141e-06 3.67631V29.1972C0.0135113 29.5635 0.0436295 29.8421 0.128005 30.1422L14.4842 16.0695L0.127119 2.73047Z" fill="#4285F4"/>
                                        <path d="M14.109 16.4372L21.2899 9.39797L5.68786 0.525521C5.10066 0.180543 4.43181 -0.000913383 3.75077 3.45722e-06C2.01677 3.45722e-06 0.553601 1.15712 0.128182 2.72724L0.127075 2.73101L14.109 16.4372Z" fill="#34A853"/>
                                    </svg>
                                    <div>플레이스토어</div>
                                </a>
                            </div>
                            <div className='AppStore_Btn'>
                                <a href='https://apps.apple.com/kr/charts/iphone' target='_blank' rel="noreferrer">
                                    <svg width="30" height="30" viewBox="0 0 30 30">
                                        <path d="M23.937 0H6.05924C2.71091 0 0 2.71091 0 6.05924V23.9408C0 27.2853 2.71091 29.9962 6.05924 29.9962H23.9408C27.2853 29.9962 30 27.2853 30 23.937V6.05924C29.9963 2.71091 27.2853 0 23.937 0Z" fill="url(#paint0_linear_815_21996)"/>
                                        <path d="M14.8707 6.89258L15.4781 5.84271C15.8531 5.18654 16.6892 4.96532 17.3454 5.34027C18.0016 5.71523 18.2228 6.55137 17.8478 7.20754L11.9948 17.3388H16.228C17.6004 17.3388 18.369 18.9511 17.7728 20.0684H5.3619C4.60449 20.0684 3.99707 19.461 3.99707 18.7036C3.99707 17.9462 4.60449 17.3388 5.3619 17.3388H8.84146L13.2959 9.61849L11.9048 7.20379C11.5299 6.54762 11.7511 5.71898 12.4073 5.33653C13.0634 4.96157 13.8921 5.18279 14.2745 5.83896L14.8707 6.89258ZM9.60637 21.4745L8.29403 23.7505C7.91908 24.4066 7.08293 24.6279 6.42677 24.2529C5.7706 23.878 5.54938 23.0418 5.92433 22.3856L6.89921 20.6984C8.00157 20.3571 8.89771 20.6196 9.60637 21.4745ZM20.9075 17.3463H24.4583C25.2157 17.3463 25.8231 17.9537 25.8231 18.7111C25.8231 19.4685 25.2157 20.0759 24.4583 20.0759H22.486L23.8171 22.3856C24.192 23.0418 23.9708 23.8705 23.3147 24.2529C22.6585 24.6279 21.8298 24.4066 21.4474 23.7505C19.2052 19.8622 17.5216 16.9526 16.4043 15.0141C15.2607 13.0418 16.0781 11.0621 16.8842 10.3909C17.7803 11.9282 19.1189 14.2492 20.9075 17.3463Z" fill="white"/>
                                        <defs>
                                            <linearGradient id="paint0_linear_815_21996" x1="15" y1="0" x2="15" y2="29.9963" gradientUnits="userSpaceOnUse">
                                                <stop stopColor="#18BFFB"/>
                                                <stop offset="1" stopColor="#2072F3"/>
                                            </linearGradient>
                                        </defs>
                                    </svg>
                                    <div>앱스토어</div>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='Notice_Interlock'>

                    <div className='Gradient_Box'>
                        <div className='Logo_Box'>
                            <svg version="1.1" id="Layer_1"x="0px" y="0px" viewBox="0 0 200 35.7">
                                <path d="M20.2,21.7H12v11.1H2.4v-30h19.7l-1.2,7.7H12v4h8.2V21.7z"/>
                                <path d="M44.2,21.5h-9.6v3.6h11.8v7.7H25v-30h21.1l-1.2,7.7H34.6v4h9.6C44.2,14.5,44.2,21.5,44.2,21.5z"/>
                                <path d="M49.2,32.3l1.4-7.9c2.9,0.7,5.6,1.1,8,1.1c1.2,0,2.3,0,3.2-0.1c0.9,0,1.7-0.1,2.5-0.2v-2.4L60,22.4c-1.9-0.2-3.6-0.5-4.9-1c-1.3-0.5-2.4-1.1-3.1-1.9c-0.8-0.8-1.3-1.7-1.7-2.8c-0.3-1.1-0.5-2.4-0.5-3.9c0-2.1,0.2-3.8,0.6-5.1c0.4-1.4,1.1-2.5,2-3.3S54.5,3,56,2.6c1.5-0.3,3.3-0.5,5.4-0.5c4.2,0,8.1,0.4,11.5,1.2L71.7,11c-3-0.5-5.4-0.7-7.2-0.7c-1.8,0-3.3,0.1-4.6,0.2v2.4l3.4,0.3c2.1,0.2,3.9,0.6,5.3,1.1s2.6,1.1,3.4,1.9c0.9,0.8,1.5,1.7,1.8,2.8c0.4,1.1,0.5,2.3,0.5,3.8c0,2-0.3,3.7-0.8,5.1c-0.5,1.4-1.2,2.4-1.9,3.2c-0.6,0.6-1.4,1-2.3,1.4c-0.9,0.3-1.9,0.6-2.9,0.7c-1,0.2-2,0.3-3.1,0.3c-1,0-2,0.1-2.8,0.1c-2.1,0-4.1-0.1-6-0.3C52.8,33,51,32.7,49.2,32.3z"/>
                                <path d="M99.4,10.5h-7v22.3h-9.6V10.5h-7V2.8h23.5L99.4,10.5L99.4,10.5z"/>
                                <path d="M100.9,32.3l1.4-7.9c2.9,0.7,5.6,1.1,8,1.1c1.2,0,2.3,0,3.2-0.1s1.7-0.1,2.5-0.2v-2.4l-4.3-0.4c-1.9-0.2-3.6-0.5-4.9-1s-2.4-1.1-3.1-1.9c-0.8-0.8-1.3-1.7-1.7-2.8c-0.3-1.1-0.5-2.4-0.5-3.9c0-2.1,0.2-3.8,0.6-5.1c0.4-1.4,1.1-2.5,2-3.3s2.1-1.4,3.6-1.8c1.5-0.3,3.3-0.5,5.4-0.5c4.2,0,8.1,0.4,11.5,1.2l-1.2,7.7c-3-0.5-5.4-0.7-7.2-0.7c-1.8,0-3.3,0.1-4.6,0.2v2.4l3.4,0.3c2.1,0.2,3.9,0.6,5.3,1.1s2.6,1.1,3.4,1.9c0.9,0.8,1.5,1.7,1.8,2.8c0.4,1.1,0.5,2.3,0.5,3.8c0,2-0.3,3.7-0.8,5.1c-0.5,1.4-1.2,2.4-1.9,3.2c-0.6,0.6-1.4,1-2.3,1.4c-0.9,0.3-1.9,0.6-2.9,0.7c-1,0.2-2,0.3-3.1,0.3c-1,0-2,0.1-2.8,0.1c-2.1,0-4.1-0.1-6-0.3C104.5,33,102.7,32.7,100.9,32.3z"/>
                                <path d="M129,2.8h9.6v22.5h3.4c1.2,0,2.1-0.2,2.5-0.5s0.7-1,0.7-2.1v-20h9.6v16.8c0,2.6-0.2,4.7-0.5,6.5s-1,3.2-1.9,4.3s-2.3,1.9-3.9,2.4s-3.9,0.7-6.5,0.7c-2.7,0-4.8-0.2-6.5-0.7s-3-1.3-3.9-2.4c-0.9-1.1-1.6-2.5-1.9-4.3c-0.3-1.8-0.5-3.9-0.5-6.5V2.8H129z"/>
                                <path d="M179.8,22.8l5.2,10h-10.6l-3.9-8.9h-2.1v8.9h-9.6v-30H174c6.9,0,10.3,3.5,10.3,10.5C184.3,18.1,182.8,21.3,179.8,22.8zM170.7,10.5h-2.2v6h2.2c1.2,0,2-0.1,2.5-0.4c0.5-0.2,0.8-0.8,0.8-1.6v-2c0-0.9-0.3-1.4-0.8-1.6C172.7,10.6,171.9,10.5,170.7,10.5z"/>
                                <path d="M188.4,32.8v-30h9.6v30H188.4z"/>
                            </svg>
                        </div>
                        <div className='Notice_Transition_InterBox'>
                            <div className='NoticeTitle'>최신 축제 정보, 지도, 알람, 그리고 더 많은<br/> 것을 담은 앱을 만나보세요.</div>
                            <div className='MoreView_Btn'><Link to=''>자세히 알아보기</Link></div>
                        </div>
                    </div>
                    <div className='Notice_InterBox'>
                        <div className='NoticeTitle'>최신 축제 정보, 지도, 알람, 그리고 더 많은<br/> 것을 담은 앱을 만나보세요.</div>
                        <div className='MoreView_Btn'><Link to=''>자세히 알아보기</Link></div>
                    </div>
                </div>
            </article>
            <article className='FESTSURI_App_Info'>
                <div className='Ticket_Wrap'>
                    <div className='Text_Item'>매주 추첨을 통한<br/><span className='Purple_Highlight'>공연 입장권</span> 증정</div>
                    <div className='Img_Item'>
                        <div className='Coupon_Item1'>
                            <img src={require('../images/MainApp/PurpleCoupon.png')} alt ="PurpleCoupon" />
                        </div>
                        <div className='Coupon_Item2'>
                            <img src={require('../images/MainApp/RedCoupon.png')} alt ="PurpleCoupon" />
                        </div>
                    </div>
                </div>
                <div className='Map_Wrap'>
                    <div className='Text_Item'>축제 별 <span className='Green_Highlight'>맞춤 지도</span>와<br/><span className='Green_Highlight'>추천 경로</span></div>
                    <div className='Img_Item'>
                        <div className='Map_Item'>
                            <svg width="236" height="247" viewBox="0 0 236 247" fill="none">
                                <g filter="url(#filter0_d_1233_20974)">
                                    <rect width="110.622" height="155.946" transform="matrix(-0.85228 0.523087 0.523087 0.85228 118.66 40.25)" fill="#42CDA2"/>
                                    <path d="M94.0449 0.899414L24.4868 98.292L106.313 231.614L175.871 134.222L94.0449 0.899414Z" fill="url(#paint0_linear_1233_20974)"/>
                                    <rect width="110.622" height="155.946" transform="matrix(-0.85228 0.523087 0.523087 0.85228 94.4414 0.431641)" fill="#1A4E82"/>
                                    <path d="M39.8027 73.8978L37.2515 75.4636L39.0713 78.4287L36.0845 80.2619L31.166 72.248L37.2952 68.4863L38.1843 70.7723L35.4152 72.4718L36.071 73.5403L38.6223 71.9745L39.8027 73.8978Z" fill="white"/>
                                    <path d="M47.2368 69.2606L44.2499 71.0938L44.8402 72.0555L48.5115 69.8022L49.7739 71.8591L43.1158 75.9455L38.1973 67.9316L44.762 63.9025L45.6511 66.1886L42.4465 68.1554L43.1023 69.2239L46.0891 67.3907L47.2368 69.2606Z" fill="white"/>
                                    <path d="M50.5626 71.1913L49.703 68.8137C50.72 68.4469 51.6256 68.0382 52.3723 67.5799C52.7457 67.3507 53.0879 67.1407 53.3516 66.9421C53.6316 66.7702 53.8641 66.5908 54.0966 66.4113L53.7031 65.7702L52.2997 66.4844C51.6757 66.7938 51.0976 67.0383 50.6112 67.153C50.1248 67.2677 49.6842 67.3174 49.3352 67.2374C48.9552 67.1765 48.652 67.0315 48.3472 66.8141C48.0736 66.5775 47.7982 66.2684 47.5523 65.8677C47.208 65.3068 46.9915 64.8144 46.9028 64.3908C46.7977 63.9404 46.8352 63.5129 46.984 63.1274C47.1329 62.7418 47.4079 62.3524 47.809 61.9591C48.2265 61.5925 48.7537 61.1954 49.4071 60.7944C50.7138 59.9924 51.9928 59.3545 53.1818 58.919L54.0708 61.205C53.0555 61.6443 52.276 62.0492 51.716 62.3929C51.1559 62.7366 50.7056 63.0497 50.3176 63.3247L50.711 63.9658L51.8181 63.3967C52.5042 63.0491 53.1298 62.8123 53.6474 62.6785C54.1649 62.5447 54.6366 62.4759 55.0167 62.5368C55.4279 62.5786 55.7621 62.7045 56.0358 62.941C56.3406 63.1585 56.5684 63.46 56.8144 63.8606C57.1423 64.3949 57.3276 64.9063 57.4016 65.3758C57.4756 65.8452 57.4217 66.246 57.3351 66.5934C57.2468 66.8682 57.0635 67.1279 56.8491 67.4066C56.6182 67.6586 56.3563 67.9297 56.0615 68.1473C55.7832 68.3917 55.4885 68.6094 55.1462 68.8194C54.8351 69.0104 54.5404 69.228 54.2915 69.3808C53.6381 69.7818 52.9995 70.137 52.3755 70.4464C51.7974 70.6909 51.1882 70.9544 50.5626 71.1913Z" fill="white"/>
                                    <path d="M62.6069 55.7818L60.4291 57.1185L64.0852 63.0755L61.0983 64.9086L57.4423 58.9517L55.2644 60.2883L54.002 58.2314L61.3134 53.744L62.5758 55.8009L62.6069 55.7818Z" fill="white"/>
                                    <path d="M66.6486 61.3192L65.7889 58.9416C66.806 58.5748 67.7116 58.1661 68.4583 57.7078C68.8316 57.4787 69.1739 57.2686 69.4375 57.07C69.7011 56.8715 69.95 56.7187 70.1825 56.5392L69.789 55.8981L68.3856 56.6124C67.7617 56.9218 67.1836 57.1662 66.6971 57.2809C66.2107 57.3956 65.7701 57.4454 65.4212 57.3653C65.0411 57.3044 64.738 57.1594 64.4332 56.942C64.1595 56.7054 63.8841 56.3963 63.6382 55.9957C63.2939 55.4347 63.0774 54.9424 62.9887 54.5187C62.8837 54.0684 62.9211 53.6409 63.07 53.2553C63.2188 52.8697 63.4938 52.4803 63.8949 52.087C64.3124 51.7205 64.8396 51.3233 65.493 50.9223C66.7997 50.1203 68.0787 49.4824 69.2677 49.0469L70.1568 51.3329C69.1414 51.7722 68.3619 52.1771 67.8019 52.5208C67.2419 52.8645 66.7916 53.1777 66.4035 53.4526L66.797 54.0937L67.904 53.5246C68.5901 53.1771 69.2158 52.9402 69.7333 52.8064C70.2509 52.6726 70.7226 52.6038 71.1026 52.6647C71.5138 52.7066 71.848 52.8324 72.1217 53.069C72.4265 53.2864 72.6544 53.5879 72.9003 53.9886C73.2282 54.5228 73.4136 55.0342 73.4875 55.5037C73.5615 55.9732 73.5077 56.3739 73.421 56.7213C73.3327 56.9962 73.1494 57.2558 72.935 57.5345C72.7042 57.7865 72.4422 58.0576 72.1475 58.2752C71.8691 58.5196 71.5744 58.7373 71.2322 58.9473C70.9211 59.1383 70.6263 59.356 70.3774 59.5087C69.7241 59.9097 69.0854 60.2649 68.4615 60.5743C67.8834 60.8188 67.2742 61.0824 66.6486 61.3192Z" fill="white"/>
                                    <path d="M70.5535 48.0726L73.5403 46.2395L77.2292 52.2498L78.287 51.6006C78.6604 51.3715 78.9076 51.1462 78.9829 50.9897C79.0581 50.8331 79.0367 50.5889 78.8564 50.295L75.5774 44.9524L78.5642 43.1193L81.3185 47.6071C81.7448 48.3016 82.0269 48.9007 82.2286 49.4389C82.4304 49.977 82.4422 50.4846 82.3425 50.9503C82.2428 51.416 81.9384 51.8971 81.5226 52.3362C81.1067 52.7752 80.4239 53.2679 79.615 53.7643C78.775 54.2799 78.0888 54.6275 77.4779 54.8186C76.867 55.0096 76.3314 55.0441 75.8711 54.9222C75.4107 54.8002 74.9634 54.5599 74.5749 54.1363C74.1865 53.7128 73.78 53.19 73.3537 52.4955L70.6157 48.0344L70.5535 48.0726Z" fill="white"/>
                                    <path d="M89.6388 43.7154L92.8962 45.3937L89.5982 47.4178L86.9257 45.7851L86.2723 46.1861L87.7315 48.5635L84.7447 50.3967L79.8262 42.3828L84.5553 39.4803C86.7021 38.1627 88.3337 38.4484 89.4814 40.3183C90.2683 41.6006 90.3263 42.7418 89.6388 43.7154ZM84.791 42.1674L84.1065 42.5875L85.0902 44.1902L85.7747 43.7701C86.148 43.541 86.3805 43.3615 86.4869 43.1859C86.6097 43.037 86.6047 42.8194 86.4735 42.6057L86.1456 42.0715C85.9981 41.831 85.8227 41.7548 85.6344 41.7968C85.4296 41.8122 85.1643 41.9382 84.791 42.1674Z" fill="white"/>
                                    <path d="M93.9537 44.7443L89.0352 36.7305L92.022 34.8973L96.9405 42.9112L93.9537 44.7443Z" fill="white"/>
                                </g>
                                <defs>
                                    <filter id="filter0_d_1233_20974" x="0.160156" y="0.431641" width="235.074" height="246.183" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                                        <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                                        <feOffset dx="30" dy="10"/>
                                        <feGaussianBlur stdDeviation="2.5"/>
                                        <feComposite in2="hardAlpha" operator="out"/>
                                        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.2 0"/>
                                        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1233_20974"/>
                                        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1233_20974" result="shape"/>
                                    </filter>
                                    <linearGradient id="paint0_linear_1233_20974" x1="128.856" y1="162.981" x2="153.286" y2="202.785" gradientUnits="userSpaceOnUse">
                                        <stop stopColor="#2D699B"/>
                                        <stop offset="1" stopColor="#42CBA2"/>
                                    </linearGradient>
                                </defs>
                            </svg>
                        </div>
                    </div>
                </div>
                <div className='Photo_Wrap'>
                    <div className='Text_Item'>추억을 공유하면<br/>추첨을 통한 <span className='Blue_Highlight'>상품 증정</span></div>   
                    <div className='Img_Item'>
                        <div className='Photo_Item1'>
                            <svg width="122" height="126" viewBox="0 0 122 126" fill="none">
                                <g filter="url(#filter0_d_841_40494)">
                                    <rect x="4.33623" y="38.4579" width="82.077" height="88.429" transform="rotate(-26.9897 4.33623 38.4579)" fill="white" stroke="black" strokeWidth="0.5"/>
                                    <rect x="9.55107" y="39.3662" width="73.6075" height="82.077" transform="rotate(-26.9897 9.55107 39.3662)" fill="#CEDCFF" stroke="black" strokeWidth="0.5"/>
                                </g>
                                <defs>
                                    <filter id="filter0_d_841_40494" x="0" y="0.873047" width="121.941" height="124.719" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                                        <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                                        <feOffset dy="4"/>
                                        <feGaussianBlur stdDeviation="2"/>
                                        <feComposite in2="hardAlpha" operator="out"/>
                                        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
                                        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_841_40494"/>
                                        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_841_40494" result="shape"/>
                                    </filter>
                                </defs>
                            </svg>
                        </div>
                        <div className='Photo_Item2'>
                            <svg width="127" height="133" viewBox="0 0 127 133" fill="none">
                                <g filter="url(#filter0_d_841_40497)">
                                    <rect x="41.9717" y="0.349866" width="86.4732" height="98.244" transform="rotate(22.4105 41.9717 0.349866)" fill="white" stroke="black" strokeWidth="0.5"/>
                                    <rect x="44.751" y="5.3108" width="77.5528" height="91.1908" transform="rotate(22.4105 44.751 5.3108)" fill="#FFCEDD" stroke="black" strokeWidth="0.5"/>
                                </g>
                                <defs>
                                    <filter id="filter0_d_841_40497" x="0.191406" y="0.0234375" width="126.049" height="132.444" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                                        <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                                        <feOffset dy="4"/>
                                        <feGaussianBlur stdDeviation="2"/>
                                        <feComposite in2="hardAlpha" operator="out"/>
                                        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
                                        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_841_40497"/>
                                        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_841_40497" result="shape"/>
                                    </filter>
                                </defs>
                            </svg>
                        </div>
                        <div className='Camera_Item'>
                            <img src={require('../images/MainApp/Event_Camera.png')} alt='Event_Camera'/>
                        </div>
                    </div>
                </div>
            </article>
        </section> 
    );
}
 
export default MainEventSection;