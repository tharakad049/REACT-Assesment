import Cookie from 'js-cookie'

const SetCookie = (cookieName, token) =>{
    Cookie.set(cookieName, token,{
        expiresIn : '10s',
        secure : true,
        sameSite : 'strict',
        path : '/'
    });
}
export default SetCookie;