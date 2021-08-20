/* eslint-disable */

/**
 * Function which validates an email using a RegEx pattern.
 * 
 * First part of the email accepts uppercase and lowercase chars and digits
 * It also accepts special characters but not in first or last positions.
 * 
 * Then comes the mandatory @
 * 
 * Second part of the email accepts uppercase and lowercase chars and digits 
 * as well as dots but not in first or last positions.
 * 
 *  
 * @param email
 * @returns true if valid, false if not valid
 */
const isValidRegEmail = (email: string): boolean => {
    const emailRegexp = new RegExp(
      /^[a-zA-Z0-9][\-_\.\+\!\#\$\%\&\'\*\/\=\?\^\`\{\|]{0,1}([a-zA-Z0-9][\-_\.\+\!\#\$\%\&\'\*\/\=\?\^\`\{\|]{0,1})*[a-zA-Z0-9]@[a-zA-Z0-9][-\.]{0,1}([a-zA-Z][-\.]{0,1})*[a-zA-Z0-9]\.[a-zA-Z0-9]{1,}([\.\-]{0,1}[a-zA-Z]){0,}[a-zA-Z0-9]{0,}$/i
    )
  
    return emailRegexp.test(email)
  };

export default isValidRegEmail;