/**
@license
Copyright 2018 The Advanced REST client authors <arc@mulesoft.com>
Licensed under the Apache License, Version 2.0 (the "License"); you may not
use this file except in compliance with the License. You may obtain a copy of
the License at
http://www.apache.org/licenses/LICENSE-2.0
Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the
License for the specific language governing permissions and limitations under
the License.
*/
import '@polymer/polymer/lib/elements/custom-style.js';
import '@webcomponents/shadycss/entrypoints/apply-shim.js';
import '@polymer/polymer/lib/elements/custom-style.js';
import '@polymer/paper-styles/typography.js';
import '@polymer/paper-styles/default-theme.js';
/*
Advanced REST Client deskto app main stylesheet.
It is a Polymer's custom style element. It will propagate variables and mixins
to all elements.
*/
const $_documentContainer = document.createElement('template');
$_documentContainer.innerHTML = `<custom-style>
  <style is="custom-style">
  html {
    --primary-color: #00A2DF;
    --primary-text-color: rgba(0, 0, 0, 0.87);
    --primary-background-color: #ffffff;
    --secondary-color: #506773;
    --secondary-text-color: #737373;
    --disabled-text-color: #9b9b9b;
    --divider-color: #dbdbdb;
    --light-primary-color: var(--paper-indygo-100);
    --dark-primary-color: var(--paper-blue-700);
    --accent-color: var(--paper-red-a200);
    --light-accent-color: #ff80ab;
    --dark-accent-color: #f50057;
    --paper-menu-background-color: #fff;
    --menu-link-color: #111111;
    --arc-link-color: #111111;
    --toolbar-color: #ffffff;
    --toolbar-background-color: var(--primary-color);
    --main-section-border-color: rgba(0, 0, 0, 0.12);
    --hover-button-accent-color: #df0052;
    --pages-fixed-height: calc(100vh - 64px);
    --arc-menu-height: 100%;
    --menu-selection-background-color: #00b9ff;
    --arc-menu-selected-background-color: var(--menu-selection-background-color);
    --saved-menu-selected-item-background-color: var(--menu-selection-background-color);
    --history-menu-selected-item-background-color: var(--menu-selection-background-color);
    --projects-menu-selected-item-background-color: var(--menu-selection-background-color);
    --projects-menu-requests-selected-item-background-color: var(--menu-selection-background-color);
    --rest-api-menu-selected-item-background-color: var(--menu-selection-background-color);
    --error-color: #dd2c00;
    --arc-font-family: 'Roboto', 'Noto', sans-serif;
    --arc-font-font-smoothing: antialiased;
    --arc-font-code-family: 'Roboto Mono', 'Consolas', 'Menlo', monospace;
    --arc-font-nowrap-white-space: nowrap;
    --arc-font-nowrap-overflow: hidden;
    --arc-font-nowrap-text-overflow: ellipsis;
    --arc-font-expensive-kerning: optimizeLegibility;
    /* Font definitions user in ARC and API components */
    --arc-font-common-base: {
      font-family: var(--arc-font-family);
      -webkit-font-smoothing: var(--arc-font-font-smoothing);
    }
    --arc-font-common-code: {
      font-family: var(--arc-font-code-family);
      -webkit-font-smoothing: var(--arc-font-font-smoothing);
    }
    --arc-font-common-expensive-kerning: {
      text-rendering: var(--arc-font-expensive-kerning);
    }
    --arc-font-common-nowrap: {
      white-space: var(--arc-font-nowrap-white-space);
      overflow: var(--arc-font-nowrap-overflow);
      text-overflow: var(--arc-font-nowrap-text-overflow);
    }
    /* Display1: Add variables from --arc-font-common-base */
    --arc-font-display1-font-size: 34px;
    --arc-font-display1-font-weight: 400;
    --arc-font-display1-letter-spacing: -.01em;
    --arc-font-display1-line-height: 40px;
    --arc-font-display1: {
      font-family: var(--arc-font-family);
      -webkit-font-smoothing: var(--arc-font-font-smoothing);
      font-size: var(--arc-font-display1-font-size);
      font-weight: var(--arc-font-display1-font-weight);
      letter-spacing: var(--arc-font-display1-letter-spacing);
      line-height: var(--arc-font-display1-line-height);
    }
    /* Title: Add variables from --arc-font-common-base and -arc-font-common-nowrap */
    --arc-font-title-font-size: 20px;
    --arc-font-title-font-weight: 500;
    --arc-font-title-line-height: 28px;
    --arc-font-title: {
      font-family: var(--arc-font-family);
      -webkit-font-smoothing: var(--arc-font-font-smoothing);
      white-space: var(--arc-font-nowrap-white-space);
      overflow: var(--arc-font-nowrap-overflow);
      text-overflow: var(--arc-font-nowrap-text-overflow);
      font-size: var(--arc-font-title-font-size);
      font-weight: var(--arc-font-title-font-weight);
      line-height: var(--arc-font-title-line-height);
    }
    /* Headline: Add variables from --arc-font-common-base */
    --arc-font-headline-font-size: 24px;
    --arc-font-headline-font-weight: 400;
    --arc-font-headline-letter-spacing: -.012em;
    --arc-font-headline-line-height: 32px;
    --arc-font-headline: {
      font-family: var(--arc-font-family);
      -webkit-font-smoothing: var(--arc-font-font-smoothing);
      font-size: var(--arc-font-headline-font-size);
      font-weight: var(--arc-font-headline-font-weight);
      letter-spacing: var(--arc-font-headline-letter-spacing);
      line-height: var(--arc-font-headline-line-height);
    }
    /* Subhead: Add variables from --arc-font-common-base */
    --arc-font-subhead-font-size: 16px;
    --arc-font-subhead-font-weight: 400;
    --arc-font-subhead-line-height: 24px;
    --arc-font-subhead: {
      font-family: var(--arc-font-family);
      -webkit-font-smoothing: var(--arc-font-font-smoothing);
      font-size: var(--arc-font-subhead-font-size);
      font-weight: var(--arc-font-subhead-font-weight);
      line-height: var(--arc-font-subhead-line-height);
    }
    /* Subhead: Add variables from --arc-font-common-base */
    --arc-font-body1-font-size: 14px;
    --arc-font-body1-font-weight: 400;
    --arc-font-body1-line-height: 20px;
    --arc-font-body1: {
      font-family: var(--arc-font-family);
      -webkit-font-smoothing: var(--arc-font-font-smoothing);
      font-size: var(--arc-font-body1-font-size);
      font-weight: var(--arc-font-body1-font-weight);
      line-height: var(--arc-font-body1-line-height);
    }
    /* Subhead: Add variables from --arc-font-common-base */
    --arc-font-body2-font-size: 14px;
    --arc-font-body2-font-weight: 500;
    --arc-font-body2-line-height: 24px;
    --arc-font-body2: {
      font-family: var(--arc-font-family);
      -webkit-font-smoothing: var(--arc-font-font-smoothing);
      font-size: var(--arc-font-body2-font-size);
      font-weight: var(--arc-font-body2-font-weight);
      line-height: var(--arc-font-body2-line-height);
    }
    /* Title: Add variables from --arc-font-common-base and -arc-font-common-nowrap */
    --arc-font-caption-font-size: 12px;
    --arc-font-caption-font-weight: 400;
    --arc-font-caption-letter-spacing: 0.011em;
    --arc-font-caption-line-height: 20px;
    --arc-font-caption: {
      font-family: var(--arc-font-family);
      -webkit-font-smoothing: var(--arc-font-font-smoothing);
      white-space: var(--arc-font-nowrap-white-space);
      overflow: var(--arc-font-nowrap-overflow);
      text-overflow: var(--arc-font-nowrap-text-overflow);
      font-size: var(--arc-font-caption-font-size);
      font-weight: var(--arc-font-caption-font-weight);
      line-height: var(--arc-font-caption-line-height);
      letter-spacing: var(--arc-font-caption-letter-spacing);
    }
    /* Enforced text selection */
    --select-text-user-select: text;
    --select-text-cursor: text;
    --select-text: {
      -webkit-user-select: var(--select-text-user-select);;
      user-select: var(--select-text-user-select);
      cursor: var(--select-text-cursor);
    }
    /* buttons */
    --paper-button: {
      font-family: var(--arc-font-family);
      -webkit-font-smoothing: var(--arc-font-font-smoothing);
      font-size: 14px;
    }
    --toggle-button: {
      @apply --arc-font-body1;
      color: #6B8A99;
      margin-right: 0;
      font-weight: normal;
    }
    --action-button: {
      background-color: var(--primary-color);
      background-image: none;
      color: white;
      transition: background-color 300ms linear;
    }
    --action-button-hover: {
      background-color: #04b3f5;
      background-image: none;
      color: white;
    }
    --action-button-disabled: {
      background: #eaeaea;
      color: #a8a8a8;
      cursor: auto;
      pointer-events: none;
    }
    --paper-icon-button: {
      transition: color cubic-bezier(0.4, 0, 1, 1) 100ms;
      color: var(--secondary-text-color);
    }
    --paper-icon-button-hover: {
      color: var(--dark-primary-color);
      color: var(--hover-button-accent-color);
    }
    --arc-link: {
      font-family: var(--arc-font-family);
      -webkit-font-smoothing: var(--arc-font-font-smoothing);
      color: #00A1DF;
    }
    /* Tutorial elements */
    --tutorial-toast-background-color: var(--primary-color);
    --tutorial-toast-button-color: var(--primary-color);
    --tutorial-toast-button-background-color: #fff;
    --tutorial-font: {
      @apply --paper-font-common-base;
      color: rgba(0, 0, 0, 0.67);
      font-size: 15px;
    }
    --empty-info: {
      @apply --arc-font-body1;
      color: rgba(0, 0, 0, 0.74);
      font-size: 16px;
    }
    /* API console navigation */
    --api-navigation-list-item-selected-background-color: var(--primary-color);
    --api-navigation-endpoint-toggle-icon-color: #9E9E9E;
    --api-navigation-endpoint-toggle-icon: {
      width: 32px;
      height: 32px;
      margin-right: 4px;
    }
    --api-navigation: {
      background-color: #F5F5F5;
    }
    --api-navigation-operation-endpoint-opened-background-color: #ECEFF1;
    /* Color of "help" icon in the editors in request panel */
    --hint-trigger-color: #455A64;
    --hint-trigger-hover-color: var(--primary-color);
    --api-form-action-icon-color: #455A64;
    --api-form-action-icon-hover-color: var(--primary-color);
    --api-form-action-button-color: #455A64;
    --api-form-action-button-hover-color: var(--primary-color);
    --from-row-action-icon-color: #455A64;
    --from-row-action-icon-color-hover: var(--primary-color);
    /* Method labels in method documentation title */
    --method-label-get-background-color: rgb(0, 128, 0);
    --method-label-get-color: #fff;
    --method-label-post-background-color: rgb(33, 150, 243);
    --method-label-post-color: #fff;
    --method-label-put-background-color: rgb(255, 165, 0);
    --method-label-put-color: #fff;
    --method-label-patch-background-color: rgb(156, 39, 176);
    --method-label-patch-color: #fff;
    --method-label-delete-background-color: rgb(244, 67, 54);
    --method-label-delete-color: #fff;
    /* Code snippets containers */
    --http-code-snippet-container-highlighted: {
      background-color: var(--code-background-color);
    }
    --http-code-snippet-line: {
      word-break: break-all;
      white-space: pre-wrap;
    }
    --http-code-snippet-container: {
      background-color: #e0e0e0;
      padding: 8px;
    }
    /* Paper tabs */
    --paper-tab-ink: var(--primary-color);
    --paper-tabs-selection-bar-color: var(--primary-color);
    --tabs-selection-width: 2px;
    --paper-tabs-selection-bar: {
      border-width: var(--tabs-selection-width);
      border-color: var(--primary-color);
    }
    --paper-tabs-content: {
      font-family: var(--arc-font-family);
      -webkit-font-smoothing: var(--arc-font-font-smoothing);
      height: calc(100% - var(--tabs-selection-width));
      border-bottom: var(--tabs-selection-width) solid rgba(39, 47, 51, .1);
      font-style: normal;
      color: rgba(0, 0, 0, 0.87);
    }
    --paper-tab-content-unselected: {
      color: rgba(0, 0, 0, 0.78);
    }
    --paper-tab: {
      border-bottom: 1px rgba(0, 0, 0, 0.12) solid;
      position: relative;
      bottom: 1px;
    }
    --paper-input-container-underline: {
      border-color: rgba(0, 0, 0, 0.12);
    }
    --input-line-color: var(--primary-color);
    /* The request editor */
    --api-request-editor-send-valid-button: {
      background-color: var(--primary-color);
      color: #fff;
    }
    --api-request-editor-abort-button: {
      background-color: var(--primary-color);
      color: #fff;
    }
    --api-request-editor-abort-button-hover: {
      background-color: var(--primary-color);
      color: #fff;
    }
    --api-request-editor-send-invalid-button: {
      background-color: var(--error-color);
      color: #fff;
    }
    --request-editor-section-padding: 8px 12px;
    /* Authorization panel */
    --stepper-step-number-background-color: var(--primary-color);
    --authorization-panel: {
      padding: var(--request-editor-section-padding);
    }
    /* URL parameters editor */
    --api-url-params-editor: {
      padding: var(--request-editor-section-padding);
    }
    --api-url-params-editor-editor-subheader: {
      @apply --arc-font-body2;
      font-size: 14px;
      padding: 0.73em 0;
      margin: 0;
      margin-right: 12px;
    }
    /* Headers editor */
    --api-headers-editor: {
      padding: var(--request-editor-section-padding);
    }
    /* Body editor */
    --api-body-editor: {
      padding: var(--request-editor-section-padding);
    }
    /* Paper-autocomplete must be styled to not go under the navigation */
    --paper-autocomplete: {
      max-width: calc(100vw - 256px - 48px);
    }
    /* Type documentation */
    --property-shape-document: {
      padding: 12px 0;
      border-bottom: 1px #CFD8DC dashed;
    }
    --arc-font-code1: {
      @apply --paper-font-code1;
    }
    /* Code styling */
    --code-background-color: #f5f2f0;
    --code-block: {
      word-wrap: break-word;
    }
    --no-info-message: {
      @apply --empty-info;
    }
    --paper-item: {
      padding: 0 16px;
    }
    /* Method labels in method documentation title */
    --method-display-get-background-color: rgb(0, 128, 0);
    --method-display-get-color: #fff;
    --method-display-post-background-color: rgb(33, 150, 243);
    --method-display-post-color: #fff;
    --method-display-put-background-color: rgb(255, 165, 0);
    --method-display-put-color: #fff;
    --method-display-patch-background-color: rgb(156, 39, 176);
    --method-display-patch-color: #fff;
    --method-display-delete-background-color: rgb(244, 67, 54);
    --method-display-delete-color: #fff;
    --method-display-options-background-color: #795548;
    --method-display-options-color: #fff;
    --method-display-head-background-color: #607D8B;
    --method-display-head-color: #fff;
    /* HTTP methods colors in method documentation panel */
    --http-method-label-get-background-color: var(--method-display-get-background-color);
    --http-method-label-get-color: var(--method-display-get-color);
    --http-method-label-post-background-color: var(--method-display-post-background-color);
    --http-method-label-post-color: var(--method-display-post-color);
    --http-method-label-put-background-color: var(--method-display-put-background-color);
    --http-method-label-put-color: var(--method-display-put-color);
    --http-method-label-patch-background-color: var(--method-display-patch-background-color);
    --http-method-label-patch-color: var(--method-display-patch-color);
    --http-method-label-delete-background-color: var(--method-display-delete-background-color);
    --http-method-label-delete-color: var(--method-display-delete-color);
    --http-method-label-options-background-color: var(--method-display-options-background-color);
    --http-method-label-options-color: var(--method-display-options-color);
    --http-method-label-head-background-color: var(--method-display-head-background-color);
    --http-method-label-head-color: var(--method-display-head-color);
    --api-endpoint-documentation-method-doc-max-width: 100%;
    --api-endpoint-documentation-tryit-max-width: auto;
    --context-menu-item-background-color-hover: #e4e4e4;
    --bottom-sheet-box-shadow: 0 6px 10px 0 rgba(0, 0, 0, 0.14),
                    0 1px 18px 0 rgba(0, 0, 0, 0.12),
                    0 3px 5px -1px rgba(0, 0, 0, 0.4);
    --request-editor-tabs-container: {
      background-color: #f5f2f0;
    }
    --request-actions-panel: {
      padding: 12px;
    }
    --request-action-editor-background-color: #fff;
    --paper-chip-autocomplete-background-color: #fff;
  }
  [narrow] {
    --narrow-request-editor-section-padding: 0px;
    --authorization-panel: {
      padding: var(--narrow-request-editor-section-padding);
    }
    --api-headers-editor: {
      padding: var(--narrow-request-editor-section-padding);
    }
    --api-body-editor: {
      padding: var(--narrow-request-editor-section-padding);
    }
    --api-url-params-editor: {
      padding: var(--narrow-request-editor-section-padding);
    }
    /* Query / URI parameters documentation styles */
    --api-parameters-document-title-narrow: {
      font-size: 17px;
    }
    /* Headers documentation styles */
    --api-headers-document-title-narrow: {
      font-size: 17px;
    }
    /* API method documentation styles */
    --api-method-documentation-title-narrow: {
      font-size: 22px;
      font-weight: 400;
    }
    --api-method-documentation-main-section-title-narrow: {
      font-size: 20px;
    }
    --api-method-documentation-subsection-title-narrow: {
      font-size: 17px;
    }
    /* Body documentation styles */
    --api-body-document-title-narrow: {
      font-size: 17px;
    }
    --api-console-main-content-margin-top: 12px;
  }
  </style>
</custom-style>`;

document.head.appendChild($_documentContainer.content);
