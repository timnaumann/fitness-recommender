import React, { useCallback, useContext } from "react";
import * as S from "./Footer.style";
import PropTypes from "prop-types";
import { useI18n } from "@store/store-hooks";
import { CookiesContext } from "@store/cookies";
import CookieActions from "@store/cookies/CookieActions";

export const Footer = (props) => {
  const [, dispatchCookieAction] = useContext(CookiesContext);
  const genericI18n = useI18n()?.generic || {};

  const handleAdjustSettings = useCallback(() => {
    dispatchCookieAction(
      CookieActions.createSetConsentSettingsToOpenAction(true)
    );
  }, [dispatchCookieAction]);

  return (
    <S.Footer className={props.className}>
      <S.FooterItemCookies onClick={handleAdjustSettings}>
        {genericI18n.cookies}
      </S.FooterItemCookies>

      {genericI18n.legalNotice && (
        <S.FooterItemImprint href={"/legal/legal-notice"}>
          <div> {genericI18n.legalNotice} </div>
        </S.FooterItemImprint>
      )}

      <S.FooterItemPrivacy href={"/legal/privacy-policy"}>
        {genericI18n.privacy}
      </S.FooterItemPrivacy>
      <S.FooterItemBlogPage href={"/blogpage"}>
        {genericI18n.blogpage}
      </S.FooterItemBlogPage>
    </S.Footer>
  );
};

Footer.propTypes = {
  className: PropTypes.string,
};

Footer.defaultProps = {
  className: "",
};

export default Footer;
