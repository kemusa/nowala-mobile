interface Regex {
  readonly EMAIL_REGEX: RegExp;
  readonly PASSWORD_REGEX: RegExp;
  readonly URL_REGEX: RegExp;
  readonly DOMAIN_REGEX: RegExp;
}

// todo: review url regex
const regex: Regex = {
  EMAIL_REGEX:
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
  PASSWORD_REGEX: /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/,

  URL_REGEX:
    /(?:(?:https?):\/\/|www\.|ftp\.)(?:\([-A-Z0-9+&@#\/%=~_|$?!:,.]*\)|[-A-Z0-9+&@#\/%=~_|$?!:,.])*(?:\([-A-Z0-9+&@#\/%=~_|$?!:,.]*\)|[A-Z0-9+&@#\/%=~_|$])/gim,
  DOMAIN_REGEX:
    /((\.co\.uk)|(\.co\.nz)|(\.com\.au)|(\.co\.jp)|(\.co\.hk)|(\.cn)|(\.fr)|(\.eu)|(\.de)|(\.us)|(\.au)|(\.uk)|(\.com)|(\.io)|(\.net)|(\.org)|(\.ca)|(\.jp)|(\.ru)|(\.ch)|(\.it)|(\.nl)|(\.hk)|(\.sg)|(\.se)|(\.no)|(\.es)|(\.pt)|(\.info)|(\.fashion)|(\.design)|(\.clothing)|(\.studio)|(\.st)|(\.dk)|(\.be)|(\.co))$/,
};

export default regex;
