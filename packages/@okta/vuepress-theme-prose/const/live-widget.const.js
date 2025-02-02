export const initialJSWidgetConf = `signInWidgetConfig = {
  // Enable or disable widget functionality with the following options. 
  // Some of these features require additional configuration in your Okta admin settings. 
  // Detailed information can be found here: https://github.com/okta/okta-signin-widget#okta-sign-in-widget
  // Look and feel changes:
  logo: '//logo.clearbit.com/okta.com', // Try changing "okta.com" to other domains, like: "workday.com", "splunk.com", or "delmonte.com"
  language: 'en',                       // Try: [fr, de, es, ja, zh-CN] Full list: https://github.com/okta/okta-signin-widget#language-and-text
  i18n: {
    //Overrides default text when using English. Override other languages by adding additional sections.
    'en': {
      'primaryauth.title': 'Sign In',   // Changes the sign in text
      'primaryauth.submit': 'Sign In',  // Changes the sign in button
      // More e.g. [primaryauth.username.placeholder,  primaryauth.password.placeholder, needhelp, etc.].
      // Full list here: https://github.com/okta/okta-signin-widget/blob/master/packages/@okta/i18n/dist/properties/login.properties
    }
  },
  // Changes to widget functionality
  features: {
    registration: true,                 // Enable self-service registration flow
    rememberMe: true,                   // Setting to false will remove the checkbox to save username
    //multiOptionalFactorEnroll: true,  // Allow users to enroll in multiple optional factors before finishing the authentication flow.
    //selfServiceUnlock: true,          // Will enable unlock in addition to forgotten password
    //smsRecovery: true,                // Enable SMS-based account recovery
    //callRecovery: true,               // Enable voice call-based account recovery
    router: true,                       // Leave this set to true for the API demo
  },
  baseUrl: 'https://live-widget.oktapreview.com',
  clientId: '0oaexo9c530ZUVuOj0h7',
  redirectUri: 'https://developer.okta.com/live-widget',
  authParams: {  
    issuer: 'https://live-widget.oktapreview.com/oauth2/ausexqn31sz3HMxdf0h7',
    responseType: ['id_token', 'token'],
    scopes: ['openid', 'email', 'profile'],
  },
};`

  export const widgetMountExample = `signInWidget = new OktaSignIn(signInWidgetConfig);

  function widgetSuccessCallback(res) {
    var key = '';
    if (res[0]) {
      key = Object.keys(res[0])[0];
      signInWidget.tokenManager.add(key, res[0]);
    }
    if (res[1]) {
      key = Object.keys(res[1])[0];
      signInWidget.tokenManager.add(key, res[1]);
    }
    if (res.status === 'SUCCESS') {
      var token = signInWidget.tokenManager.get(key);
      console.log("Logged in to Okta and issued token:");
      console.log(token);
      console.log("Reload this page to start over.");
      alert("Logged in! Check your developer console for details");
    }
  }
  
  function widgetErrorCallback (err) {
  }
  
  signInWidget.renderEl({el: '#widget-container'}, widgetSuccessCallback, widgetErrorCallback);
  `


export const initialWidgetSCSS = `
// Page Properties
$fonts: 'montserrat', Arial, Helvetica, sans-serif;
$default-border-radius: 3px;
$container-width: 400px;
$container-min-width: 300px;
$num-tabs: 5;

// Font Size
$font-size: 25px;
$font-size-small: 12px;
$font-size-header: 14px;
$font-size-footer: 11px;
$font-size-default: 14px;

// Font Weight
$font-weight-body: normal;
$font-weight-header: bold;

// Theme Color
$primary-bg-color: #fff;
$secondary-bg-color: #f9f9f9;

// Text Color
$header-text-color: #5e5e5e;
$dark-text-color: #5e5e5e;
$medium-text-color: #777;
$light-text-color: #a7a7a7;
$link-text-color: #0074b3;
$placeholder-text-color: #aaa;
$error-text-color: #e34843;

// Button Color
$icon-button-bg-color: #fff;
$button-bg-color: #fbfbfb;
$dark-button-bg-color: #929292;
$primary-button-bg-color: #007dc1;
$success-button-bg-color: #4cbf9c;
$negative-button-bg-color: #c35151;
$disabled-button-text-color: #aaa;
$disabled-primary-button-text-color: #fff;
$disabled-primary-button-bg-color: #63b1d7;
$disabled-primary-border-color: #3096c9;

// Social Auth Button Colors
$facebook-icon-bg-color: #304879; // fb brand color - #3B5998
$facebook-label-bg-color: #406094;
$facebook-border-color: #375685;
$google-icon-bg-color: #d43722; // google brand color - #DC4E41
$google-label-bg-color: #de4937;
$google-border-color: #b63c33;
$linkedin-icon-bg-color: #04659a; // linkedin brand color - #0077B5
$linkedin-label-bg-color: #0077b5;
$linkedin-border-color: #0f608f;
$microsoft-icon-bg-color: #4294de; // microsoft brand color - #00A1F1
$microsoft-label-bg-color: #00a1f1;
$microsoft-border-color: #447199;

//Default Custom Button Colors
$default-custom-button-background-color: #ff5f73;
$default-custom-button-border-color: #d6001a;

// Button Size
$input-height: 40px;
$button-height: 50px;
$button-line-height: $input-height - 4px;
$button-padding: 0 15px;

// Input field
$input-bg-color: #fff;
$input-border-color: #bbb;
$input-border-color-hover: #888;
$input-border-color-focus: #0074b3;

// Modal
$modal-bg-color: #f9f9f9;

// Footer

// Other

// @import 'variables';
@import 'helpers';

@mixin light-button-template($bg-color) {
  @include button-template($bg-color, 1%, $dark-text-color, 22%, 25%);
  @include button-shadow(0.05);
  &:hover,
  &:focus,
  &:active,
  &:focus {
  /* -- Buttons' Colors -- */
    box-shadow: none;
  }
}

@mixin dark-button-template($bg-color) {
  @include button-template($bg-color, 3%, #fff, 15%, 17%);
  @include button-shadow(0.15);
  &:hover,
  &:focus,
  &:active,
  &:focus {
  /* -- Buttons' Colors -- */
    box-shadow: none;
  }
}

@mixin button-shadow($drop-shadow-opacity) {
  box-shadow: rgba(#000, $drop-shadow-opacity) 0 1px 0, rgba(255, 255, 255, 0.1) 0 1px 0 0 inset;
}

@mixin button-template($bg-color, $gradient-factor, $text-color, $border-factor, $border-bottom-factor) {
  color: $text-color;
  background-color: $bg-color;
  background: -o-linear-gradient(top, $bg-color 0%, darken($bg-color, $gradient-factor) 100%); /* Opera 11.10+ */
  background: -ms-linear-gradient(top, $bg-color 0%, darken($bg-color, $gradient-factor) 100%); /* IE10+ */
  background: linear-gradient($bg-color, darken($bg-color, $gradient-factor));
  border-color: darken($bg-color, $border-factor);
  border-bottom-color: darken($bg-color, $border-bottom-factor);

  &:hover,
  &:focus,
  &:active,
  &:focus {
  /* -- Buttons' Colors -- */
    $hover-bg-color: lighten($bg-color, 3%);
    background-color: $hover-bg-color;
    background: -o-linear-gradient(top, $hover-bg-color 0%, darken($hover-bg-color, $gradient-factor) 100%); /* Opera 11.10+ */
    background: -ms-linear-gradient(top, $hover-bg-color 0%, darken($hover-bg-color, $gradient-factor) 100%); /* IE10+ */
    background-image: linear-gradient($hover-bg-color, darken($hover-bg-color, $gradient-factor));
    border-color: darken($bg-color, $border-factor * 1.3);
    border-bottom-color: darken($bg-color, $border-bottom-factor * 1.2);
    text-decoration: none;
    cursor: pointer;
  }
}


// scss-lint:disable IdSelector
#okta-sign-in.auth-container {
// scss-lint:enable IdSelector

  &.main-container {
  /* -- Fonts and Text Colors -- */
    font-family: $fonts;
    color: $medium-text-color;
  }

  h2,
  h3 {
  /* -- Fonts and Text Colors -- */
    font-weight: $font-weight-header;
    color: $header-text-color;
  }

  .okta-sign-in-header {
  /* -- Fonts and Text Colors -- */
    color: $header-text-color;
  }

  .okta-form-subtitle,
  .okta-form-label {
  /* -- Fonts and Text Colors -- */
    color: $medium-text-color;
  }

  .link {
  /* -- Fonts and Text Colors: links -- */
    color: $medium-text-color;

    &:link,
    &:visited,
    &:hover,
    &:active {
    /* -- Fonts and Text Colors: links -- */
      color: $medium-text-color;
    }
  }

  .inline-link {
  /* -- Fonts and Text Colors: links -- */
    color: $link-text-color;

    &:link,
    &:visited,
    &:hover,
    &:active {
    /* -- Fonts and Text Colors: links -- */
      color: $link-text-color;
    }
  }

  input[type="submit"],
  input[type="button"] {
    /* -- Submit Buttons' Fonts -- */
    font-family: $fonts;
  }


  &.main-container {
  /* -- Main Background and Border Colors -- */
    background-color: $primary-bg-color;
    border-color: #ddd #ddd #d8d8d8;
    box-shadow: 0 2px 0 rgba(175, 175, 175, 0.12);

    @include mobile {
      border-width: 0;
      box-shadow: none;
    }

    .bg-helper {
    /* -- Main Background and Border Colors -- */
    /* set the helper's color value to the same color as the main-container's background */
      color: $primary-bg-color;
    }
  }

  .okta-sign-in-header {
  /* -- Main Background and Border Colors -- */
    border-bottom-color: #ddd;
  }

  .okta-sign-in-beacon-border {
  /* -- Main Background and Border Colors -- */
    border-color: #a7a7a7;
  }

  .okta-form-divider {
  /* -- Main Background and Border Colors -- */
    border-bottom-color: #e8e8e8;
  }

  .factor-icon,
  .qrcode-image {
  /* -- Main Background and Border Colors -- */
    border-color: #ccc;
  }


  .mfa-okta-verify-30,
  .enroll-factor-row .mfa-okta-verify {
    /* -- Factor Icons (small): Okta Verify -- */
    background-image: url('../img/icons/mfa/oktaVerify_38x38.png');

    @media
    (-webkit-min-device-pixel-ratio: 2),
    (min-resolution: 192dpi) {
      /* -- Factor Icons (high DPI): Okta Verify -- */
      background-image: url('../img/icons/mfa/oktaVerify_ico@2x.png');
    }
  }

  .mfa-okta-verify {
    /* -- Factor Icons (large): Okta Verify -- */
    background-image: url('../img/icons/mfa/oktaVerify_70x70.png');

    @media
    (-webkit-min-device-pixel-ratio: 2),
    (min-resolution: 192dpi) {
      /* -- Factor Icons (high DPI): Okta Verify -- */
      background-image: url('../img/icons/mfa/oktaVerify@2x.png');
    }
  }

  .mfa-google-auth-30,
  .enroll-factor-row .mfa-google-auth {
    /* -- Factor Icons (small): Google Authenticator -- */
    background-image: url('../img/icons/mfa/googleAuth_38x38.png');

    @media
    (-webkit-min-device-pixel-ratio: 2),
    (min-resolution: 192dpi) {
      /* -- Factor Icons (high DPI): Google Authenticator -- */
      background-image: url('../img/icons/mfa/googleAuth_ico@2x.png');
    }
  }

  .mfa-google-auth {
    /* -- Factor Icons (large): Google Authenticator -- */
    background-image: url('../img/icons/mfa/googleAuth_70x70.png');

    @media
    (-webkit-min-device-pixel-ratio: 2),
    (min-resolution: 192dpi) {
      /* -- Factor Icons (high DPI): Google Authenticator  -- */
      background-image: url('../img/icons/mfa/googleAuth@2x.png');
    }
  }

  .mfa-symantec-30,
  .enroll-factor-row .mfa-symantec {
    /* -- Factor Icons (small): Symantec VIP -- */
    background-image: url('../img/icons/mfa/symantec_38x38.png');

    @media
    (-webkit-min-device-pixel-ratio: 2),
    (min-resolution: 192dpi) {
      /* -- Factor Icons (high DPI): Symantec VIP -- */
      background-image: url('../img/icons/mfa/symantec_ico@2x.png');
    }
  }

  .mfa-symantec {
    /* -- Factor Icons (large): Symantec VIP -- */
    background-image: url('../img/icons/mfa/symantec_70x70.png');

    @media
    (-webkit-min-device-pixel-ratio: 2),
    (min-resolution: 192dpi) {
      /* -- Factor Icons (high DPI): Symantec VIP -- */
      background-image: url('../img/icons/mfa/symantec@2x.png');
    }
  }

  .mfa-rsa-30,
  .enroll-factor-row .mfa-rsa {
    /* -- Factor Icons (small): RSA SecurID -- */
    background-image: url('../img/icons/mfa/rsa_38x38.png');

    @media
    (-webkit-min-device-pixel-ratio: 2),
    (min-resolution: 192dpi) {
      /* -- Factor Icons (high DPI): RSA SecurID -- */
      background-image: url('../img/icons/mfa/rsa_ico@2x.png');
    }
  }

  .mfa-rsa {
    /* -- Factor Icons (large): RSA SecurID -- */
    background-image: url('../img/icons/mfa/rsa_70x70.png');

    @media
    (-webkit-min-device-pixel-ratio: 2),
    (min-resolution: 192dpi) {
      /* -- Factor Icons (high DPI): RSA SecurID -- */
      background-image: url('../img/icons/mfa/rsa@2x.png');
    }
  }

  .mfa-onprem-30,
  .enroll-factor-row .mfa-onprem {
    /* -- Factor Icons (small): OnPrem -- */
    background-image: url('../img/icons/mfa/onprem_38x38.png');

    @media
    (-webkit-min-device-pixel-ratio: 2),
    (min-resolution: 192dpi) {
      /* -- Factor Icons (high DPI): OnPrem -- */
      background-image: url('../img/icons/mfa/onprem_ico@2x.png');
    }
  }

  .mfa-onprem {
    /* -- Factor Icons (large): OnPrem -- */
    background-image: url('../img/icons/mfa/onprem_70x70.png');

    @media
    (-webkit-min-device-pixel-ratio: 2),
    (min-resolution: 192dpi) {
      /* -- Factor Icons (high DPI): OnPrem -- */
      background-image: url('../img/icons/mfa/onprem@2x.png');
    }
  }

  .mfa-duo-30,
  .enroll-factor-row .mfa-duo {
    /* -- Factor Icons (small): DUO -- */
    background-image: url('../img/icons/mfa/duo_38x38.png');

    @media
    (-webkit-min-device-pixel-ratio: 2),
    (min-resolution: 192dpi) {
      /* -- Factor Icons (high DPI): DUO -- */
      background-image: url('../img/icons/mfa/duo_ico@2x.png');
    }
  }

  .mfa-duo {
    /* -- Factor Icons (large): DUO -- */
    background-image: url('../img/icons/mfa/duo_70x70.png');

    @media
    (-webkit-min-device-pixel-ratio: 2),
    (min-resolution: 192dpi) {
      /* -- Factor Icons (high DPI): DUO -- */
      background-image: url('../img/icons/mfa/duo@2x.png');
    }
  }

  .mfa-yubikey-30,
  .enroll-factor-row .mfa-yubikey {
    /* -- Factor Icons (small): Yubikey -- */
    background-image: url('../img/icons/mfa/yubico_38x38.png');

    @media
    (-webkit-min-device-pixel-ratio: 2),
    (min-resolution: 192dpi) {
      /* -- Factor Icons (high DPI): Yubikey -- */
      background-image: url('../img/icons/mfa/yubico_ico@2x.png');
    }
  }

  .mfa-yubikey {
    /* -- Factor Icons (large): Yubikey -- */
    background-image: url('../img/icons/mfa/yubico_70x70.png');

    @media
    (-webkit-min-device-pixel-ratio: 2),
    (min-resolution: 192dpi) {
      /* -- Factor Icons (high DPI): Yubikey -- */
      background-image: url('../img/icons/mfa/yubico@2x.png');
    }
  }

  .mfa-sms-30,
  .enroll-factor-row .mfa-okta-sms {
    /* -- Factor Icons (small): SMS -- */
    background-image: url('../img/icons/mfa/sms_38x38.png');

    @media
    (-webkit-min-device-pixel-ratio: 2),
    (min-resolution: 192dpi) {
      /* -- Factor Icons (high DPI): SMS -- */
      background-image: url('../img/icons/mfa/sms_ico@2x.png');
    }
  }

  .mfa-okta-sms {
    /* -- Factor Icons (large): SMS -- */
    background-image: url('../img/icons/mfa/sms_70x70.png');

    @media
    (-webkit-min-device-pixel-ratio: 2),
    (min-resolution: 192dpi) {
      /* -- Factor Icons (high DPI): SMS -- */
      background-image: url('../img/icons/mfa/sms@2x.png');
    }
  }

  .mfa-call-30,
  .enroll-factor-row .mfa-okta-call {
    /* -- Factor Icons (small): CALL -- */
    background-image: url('../img/icons/mfa/voicecall_38x38.png');

    @media
    (-webkit-min-device-pixel-ratio: 2),
    (min-resolution: 192dpi) {
      /* -- Factor Icons (high DPI): CALL -- */
      background-image: url('../img/icons/mfa/voicecall_ico@2x.png');
    }
  }

  .mfa-okta-call {
    /* -- Factor Icons (large): CALL -- */
    background-image: url('../img/icons/mfa/voicecall_70x70.png');

    @media
    (-webkit-min-device-pixel-ratio: 2),
    (min-resolution: 192dpi) {
      /* -- Factor Icons (high DPI): CALL -- */
      background-image: url('../img/icons/mfa/voicecall@2x.png');
    }
  }

  .mfa-email-30,
  .enroll-factor-row .mfa-okta-email {
    /* -- Factor Icons (small): EMAIL -- */
    background-image: url('../img/icons/mfa/email_38x38.png');

    @media
    (-webkit-min-device-pixel-ratio: 2),
    (min-resolution: 192dpi) {
      /* -- Factor Icons (high DPI): EMAIL -- */
      background-image: url('../img/icons/mfa/email_ico@2x.png');
    }
  }

  .mfa-okta-email {
    /* -- Factor Icons (large): EMAIL -- */
    background-image: url('../img/icons/mfa/email_70x70.png');

    @media
    (-webkit-min-device-pixel-ratio: 2),
    (min-resolution: 192dpi) {
      /* -- Factor Icons (high DPI): EMAIL -- */
      background-image: url('../img/icons/mfa/email@2x.png');
    }
  }

  .mfa-question-30,
  .enroll-factor-row .mfa-okta-security-question {
    /* -- Factor Icons (small): Security Question -- */
    background-image: url('../img/icons/mfa/question_38x38.png');

    @media
    (-webkit-min-device-pixel-ratio: 2),
    (min-resolution: 192dpi) {
      /* -- Factor Icons (high DPI): Security Question -- */
      background-image: url('../img/icons/mfa/question_ico@2x.png');
    }
  }

  .mfa-okta-security-question {
    /* -- Factor Icons (large): Security Question -- */
    background-image: url('../img/icons/mfa/question_70x70.png');

    @media
    (-webkit-min-device-pixel-ratio: 2),
    (min-resolution: 192dpi) {
      /* -- Factor Icons (high DPI): Security Question -- */
      background-image: url('../img/icons/mfa/question@2x.png');
    }
  }

  .mfa-windows-hello-30,
  .enroll-factor-row .mfa-windows-hello {
    /* -- Factor Icons (small): Windows Hello -- */
    background-image: url('../img/icons/mfa/windowsHello_38x38.png');

    @media
    (-webkit-min-device-pixel-ratio: 2),
    (min-resolution: 192dpi) {
      /* -- Factor Icons (high DPI): Windows Hello -- */
      background-image: url('../img/icons/mfa/windowsHello_ico@2x.png');
    }
  }

  .mfa-windows-hello {
    /* -- Factor Icons (large): Windows Hello -- */
    background-image: url('../img/icons/mfa/windowsHello_70x70.png');

    @media
    (-webkit-min-device-pixel-ratio: 2),
    (min-resolution: 192dpi) {
      /* -- Factor Icons (high DPI): Windows Hello -- */
      background-image: url('../img/icons/mfa/windowsHello@2x.png');
    }
  }

  .mfa-u2f-30,
  .enroll-factor-row .mfa-u2f {
    /* -- Factor Icons (small): U2F -- */
    background-image: url('../img/icons/mfa/u2f_38x38.png');

    @media
    (-webkit-min-device-pixel-ratio: 2),
    (min-resolution: 192dpi) {
      /* -- Factor Icons (high DPI): U2F -- */
      background-image: url('../img/icons/mfa/u2f_ico@2x.png');
    }
  }

  .mfa-u2f {
    /* -- Factor Icons (large): U2F -- */
    background-image: url('../img/icons/mfa/u2f_70x70.png');

    @media
    (-webkit-min-device-pixel-ratio: 2),
    (min-resolution: 192dpi) {
      /* -- Factor Icons (high DPI): U2F -- */
      background-image: url('../img/icons/mfa/u2f@2x.png');
    }
  }

  .mfa-okta-password {
    /* -- Factor Icons (large): Password -- */
    background-image: url('../img/icons/mfa/password_70x70.png');

    @media
    (-webkit-min-device-pixel-ratio: 2),
    (min-resolution: 192dpi) {
      /* -- Factor Icons (high DPI): Password -- */
      background-image: url('../img/icons/mfa/password@2x.png');
    }
  }

  .button {
  /* -- Buttons' Colors -- */
    @include light-button-template($button-bg-color);

    &:focus {
      border-color: $input-border-color-focus;
    }
  }

  .button-dark {
    /* -- Buttons' Colors -- */
    @include dark-button-template($dark-button-bg-color);
  }

  .button-primary {
  /* -- Buttons' Colors -- */
    @include dark-button-template($primary-button-bg-color);
  }

  .button-success {
  /* -- Buttons' Colors -- */
    @include dark-button-template($success-button-bg-color);
  }

  .button.link-button-disabled {
    /* -- Buttons' Colors -- */
    color: $disabled-button-text-color;

    &:hover,
    &:focus,
    &:active,
    &:focus {
    /* -- Buttons' Colors -- */
      cursor: default;
      background-image: none;
    }
  }

  .button.button-primary.link-button-disabled {
    /* -- Buttons' Colors -- */
    color: $disabled-primary-button-text-color;
    background-color: $disabled-primary-button-bg-color;
    border-color: $disabled-primary-button-bg-color;
    background-image: none;
    box-shadow: none;

    &:hover,
    &:focus,
    &:active,
    &:focus {
    /* -- Buttons' Colors -- */
      cursor: default;
      background-image: none;
    }
  }

  .icon-button {
  /* -- Buttons' Colors -- */
    @include button-template($icon-button-bg-color, 0%, $dark-text-color, 23%, 26%);
  }


  .okta-dropdown-list {
  /* -- Dropdown Colors -- */
    /* background: #fff; */
    border-color: $input-border-color-hover;
  }

  .factors-dropdown-wrap .okta-dropdown-list {
  /* -- Dropdown Colors -- */
    // scss-lint:disable DuplicateProperty
    border-color: #ccc;
    border-color: rgba(0, 0, 0, 0.2);
    // scss-lint:disable DuplicateProperty
  }

  .okta-dropdown-option {
  /* -- Dropdown Colors -- */
    /* background: transparent; */
    /* border-bottom-color: #fff; */

    &:hover {
    /* -- Dropdown Colors -- */
      /* background: #f9f9f9; */
    }

    &.dropdown-list-title:hover {
    /* -- Dropdown Colors -- */
      background: transparent;
    }

    a {
    /* -- Dropdown Colors -- */
      color: $dark-text-color;
    }
  }


  .okta-infobox-error {
  /* -- Error Infobox Colors -- */
    /* background-color: #fff; */
    /* border: 1px solid #ddd; */

    &:before {
    /* -- Error Infobox Colors -- */
      /* background-color: #e34843; */
    }

    .error-16:before {
    /* -- Error Infobox Colors: error icon -- */
      /* color: #fff; */

      /* Use the rules below to replace an error icon in error infoboxes */
      /* content: ''; */
      /* width: 16px; */
      /* height: 16px; */
      /* background-image: none; */
    }

  }

  .enroll-required-factor-list {
    .enroll-factor-row-min .enroll-factor-description {
      h3 {
        /* -- Enroll required factors, factors that are not the current step -- */
        color: $light-text-color;
      }
    }

  }

  .okta-form-input-field {
  /* -- Input Fields -- */
    background-color: $input-bg-color;
    border-color: $input-border-color;

    &:hover {
    /* -- Input Fields -- */
      border-color: $input-border-color-hover;
    }

    &.focused-input {
      border-color: $input-border-color-focus;
    }

    input {
    /* -- Input Fields -- */
      font-family: $fonts;
      color: $dark-text-color;

      &::-webkit-input-placeholder {
      /* -- Input Fields: placeholder -- */
        font-family: $fonts;
        color: $placeholder-text-color;
      }

      &::-moz-placeholder {
      /* -- Input Fields: placeholder -- */
        font-family: $fonts;
        color: $placeholder-text-color;
      }

      &:-ms-input-placeholder {
      /* -- Input Fields: placeholder -- */
        font-family: $fonts;
        color: $placeholder-text-color;
      }

      &[disabled] {
      /* -- Input Fields: disabled input field -- */
        color: $medium-text-color;
        -webkit-text-fill-color: $medium-text-color;
        /* background: #f4f4f4; */
      }

      &[type="password"] {
      /* -- Input Fields: password input field -- */
        font-family: Verdana, sans-serif;
      }

    }

    placeholder {
    /* -- Input Fields: placeholder -- */
      font-family: $fonts;
      color: $placeholder-text-color;
    }
  }

  .input-icon:before,
  .input-tooltip:before {
  /* -- Input Fields: icons -- */
    color: $light-text-color;
  }

  .okta-form-label-inline {
  /* -- Input Fields -- */
    /* background-color: #f2f2f2; */
    /* border-color: #c8c8c8; */
    /* color: #999; */
  }

  .okta-form-input-error {
  /* -- Input Fields: error highlight -- */
    /* color: #d93934; */

    .error-16-small:before {
    /* -- Input Fields: error icon -- */
      /* color: #e34843; */

      /* Use the rules below to replace input fields error icon */
      /* content: ''; */
      /* width: 16px; */
      /* height: 16px; */
      /* background-image: none; */
    }
  }


  .chzn-single {
  /* -- Input Fields: Select Input -- */
    background-color: $input-bg-color;
    border-color: $input-border-color;

    span {
    /* -- Input Fields: Select Input -- */
      color: $medium-text-color;
    }

    &:hover {
    /* -- Input Fields: Select Input -- */
      border-color: $input-border-color-hover;
    }
  }

  .chzn-with-drop {
    .chzn-single,
    .chzn-drop {
    /* -- Input Fields: Select Input -- */
      background-color: $input-bg-color;
      border-color: $input-border-color-hover;
    }

    .chzn-results {

      li {
      /* -- Input Fields: Select Input -- */
        /* border-color: #fff; */
      }

      .highlighted {
      /* -- Input Fields: Select Input -- */
        /* background-color: #f9f9f9; */
      }
    }
  }

  .primary-auth { /* -- Page specific top level selectors -- */ }
  .password-expired { /* -- Page specific top level selectors -- */ }
  .password-reset { /* -- Page specific top level selectors -- */ }
  .password-reset-email-sent { /* -- Page specific top level selectors -- */ }
  .forgot-password { /* -- Page specific top level selectors -- */ }
  .account-unlock { /* -- Page specific top level selectors -- */ }
  .account-unlock-email-sent { /* -- Page specific top level selectors -- */ }
  .recovery-challenge { /* -- Page specific top level selectors -- */ }
  .recovery-loading { /* -- Page specific top level selectors -- */ }
  .recovery-question { /* -- Page specific top level selectors -- */ }
  .refresh-auth-state { /* -- Page specific top level selectors -- */ }

  .enroll-choices { /* -- Page specific top level selectors -- */ }
  .enroll-totp { /* -- Page specific top level selectors -- */ }
  .barcode-totp { /* -- Page specific top level selectors -- */ }
  .activate-totp { /* -- Page specific top level selectors -- */ }
  .enroll-manual-totp { /* -- Page specific top level selectors -- */ }
  .barcode-push { /* -- Page specific top level selectors -- */ }
  .activate-push { /* -- Page specific top level selectors -- */ }
  .enroll-manual-push { /* -- Page specific top level selectors -- */ }
  .enroll-activation-link-sent { /* -- Page specific top level selectors -- */ }
  .enroll-symantec { /* -- Page specific top level selectors -- */ }
  .enroll-rsa { /* -- Page specific top level selectors -- */ }
  .enroll-onprem { /* -- Page specific top level selectors -- */ }
  .enroll-duo { /* -- Page specific top level selectors -- */ }
  .enroll-sms { /* -- Page specific top level selectors -- */ }
  .enroll-call { /* -- Page specific top level selectors -- */ }
  .enroll-question { /* -- Page specific top level selectors -- */ }

  .mfa-verify-duo { /* -- Page specific top level selectors -- */ }
  .mfa-verify { /* -- Page specific top level selectors: all challenge pages except duo -- */ }
  .mfa-verify-totp { /* -- Page specific top level selectors -- */ }
  .mfa-verify-push { /* -- Page specific top level selectors -- */ }
  .mfa-verify-totp-inline { /* -- Page specific top level selectors -- */ }
  .mfa-verify-question { /* -- Page specific top level selectors -- */ }
  .mfa-verify-passcode { /* -- Page specific top level selectors -- */ }
  .mfa-verify-password { /* -- Page specific top level selectors -- */ }

}


.okta-sign-in-tooltip.qtip-custom {
/* -- Tooltips -- */
  font-family: $fonts;
  /* background-color: #4d4d4d; */
  /* border-color: #303030; */

  .qtip-content {
  /* -- Tooltips -- */
    /* color: #f3f3f3; */
  }

  .qtip-titlebar {
  /* -- Tooltips -- */
    /* background-color: #404040 */
  }
}

.okta-sign-in-security-image-tooltip.qtip-custom {
  /* -- Tooltips -- */
  font-family: $fonts;
  /* background-color: #4d4d4d; */
  /* border-color: #303030; */

  .qtip-content {
    /* -- Tooltips -- */
    /* color: #f3f3f3; */
  }
}
`

export const LIVE_WIDGET_DYNAMIC_STYLE_ID='LiveOktaWidgetStyleContainer'