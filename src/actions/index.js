export const EMAIL_CHANGED = 'email_changed';
export const PASSWORD_CHANGED = 'password_changed';

export const emailChanged=(text)=>{
    return{
        type:EMAIL_CHANGED,
        payload:text
    }
}

export const passwordChanged =(password)=>{
    return{
        type:PASSWORD_CHANGED,
        payload:password
    }
}