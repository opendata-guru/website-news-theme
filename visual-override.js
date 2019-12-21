/*
 * Custom function used to generate the output of the override.css file
 */

var generateOverride = function (params) {
    let output = ''; 
    
    if (
        params.mainWidth !== '50rem' || 
        params.sidebarWidth !== '18rem' || 
        params.navbarHeight !== '3.4rem' || 
        params.logoColor !== '#FFFFFF' || 
        params.primaryColor !== '#448AFF' || 
        params.textColor !== '#2C2E35' || 
        params.headingColor !== '#2C2E35' || 
        params.linkColor !== '#2C2E35' || 
        params.linkHoverColor !== '#448AFF' ||         
        params.borderColorLight !== '#E1E2E3' ||
        params.roundedLayout !== '4' ||
        params.cardSmallHeight !== '14rem' ||
        params.cardLargeHeight !== '24rem' ||
        params.overlayBg !== '#448AFF' ||
        params.fontHeadignsWeight !== '600' ||       
        params.linkColorMenu !== '#FFFFFF' ||
        params.linkHoverColorMenu !== '#FFFFFF' ||
        params.linkActiveBgMenu !== 'rgba(0,0,0,0.1)' ||
        params.submenuBg !== '#FFFFFF' ||
        params.submenuLinkColor !== '#84888E' ||
        params.submenuLinkHoverColor !== '#2C2E35' ||
        params.submenuLinkHoverBgMenu !== '#F7F7F8') {
        output += `
        :root {
           --main-col-width:           ${params.mainWidth}; 
           --sidebar-width:            ${params.sidebarWidth}; 
           --navbar-height:            ${params.navbarHeight};
           --logo-color:               ${params.logoColor}; 
           --primary-color:            ${params.primaryColor};   
           --text-color:               ${params.textColor}; 
           --headings-color:           ${params.headingColor}; 
           --link-color:               ${params.linkColor}; 
           --link-hover-color:         ${params.linkHoverColor}; 
           --border-color-light:       ${params.borderColorLight};
           --border-radius:            ${params.roundedLayout}px;
           --card-small-height:        ${params.cardSmallHeight};
           --card-large-height:        ${params.cardLargeHeight}; 
           --overlay-bg:               ${params.overlayBg}; 
           --headings-weight:          ${params.fontHeadignsWeight};
           --headings-transform:       ${params.fontHeadingsTransform};
           --menu-link-color:          ${params.linkColorMenu};
           --menu-link-hover-color:    ${params.linkHoverColorMenu};
           --menu-link-active-bg:      ${params.linkActiveBgMenu};
           --submenu-bg:               ${params.submenuBg};
           --submenu-link-color:       ${params.submenuLinkColor};
           --submenu-link-hover-color: ${params.submenuLinkHoverColor};
           --submenu-link-hover-bg:    ${params.submenuLinkHoverBgMenu};

        }`;
    }       

    if(params.minFontSize !== '1.1' || params.maxFontSize !== '1.2') {
        output += `
        html {
          font-size: ${params.minFontSize}rem;
        }

        @media screen and (min-width: 20rem) {
          html {
               font-size: calc(${params.minFontSize}rem + (${params.maxFontSize} - ${params.minFontSize}) * ((100vw - 20rem) / 55));
          }
        }

        @media screen and (min-width: 75rem) {
          html {
               font-size: ${params.maxFontSize}rem;
            }
        }`;
    }
	

	if(params.primaryColor !== '#448AFF') {
        output += `       
       input[type=checkbox]:checked + label:before,
       input[type=radio]:checked + label:before {
               background-image: url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 11 8'%3e%3cpolygon points='9.53 0 4.4 5.09 1.47 2.18 0 3.64 2.93 6.54 4.4 8 5.87 6.54 11 1.46 9.53 0' fill='${params.primaryColor.replace('#', '%23')}'/%3e%3c/svg%3e");

        input[type=radio]:checked + label:before {
               background-image: url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 8 8'%3e%3ccircle cx='4' cy='4' r='4' fill='${params.primaryColor.replace('#', '%23')}'/%3e%3c/svg%3e");         
        
        }`;
    }   

     if (params.submenu === 'custom') {
        output += `
        .navbar .navbar__submenu {
               width: ${params.submenuWidth}px;     
        }

        .navbar .has-submenu .has-submenu:active > .navbar__submenu,
        .navbar .has-submenu .has-submenu:focus > .navbar__submenu,
        .navbar .has-submenu .has-submenu:hover > .navbar__submenu {
               left: ${params.submenuWidth}px;  
        }
        .navbar .has-submenu .has-submenu:active > .navbar__submenu.is-right-submenu,
        .navbar .has-submenu .has-submenu:focus > .navbar__submenu.is-right-submenu,
        .navbar .has-submenu .has-submenu:hover > .navbar__submenu.is-right-submenu {
               left: -${params.submenuWidth}px; 
        }`;
    }       
    
    
    if(params.galleryItemGap !== '0.24286rem') {
        output += `   
       .gallery__item {
               padding: ${params.galleryItemGap}; 
    } 
       .gallery {   
               margin: calc(1.45714rem + 1vw) -${params.galleryItemGap}; 
       }`;    	 
    }	
	
  if(params.lazyLoad) {
        if(params.lazyLoadEffect !== 'blur') {
            output += ` 
            .lazyload,
            .lazyloading {
               opacity: 0;
            }
            .lazyloaded {
               opacity: 1;
               transition: opacity 1s cubic-bezier(0.215, 0.61, 0.355, 1); 
            }`;    	 
        }

        if (params.lazyLoadEffect === 'blur') {
            output += ` 
            .lazyload,
            .lazyloading {
               -webkit-filter: blur(5px);
               filter: blur(5px);
               transition: filter 400ms, -webkit-filter 400ms;
            }
            .lazyloaded {
               -webkit-filter: blur(0);
               filter: blur(0);
            }`;
        }
    }
   
    return output;
}

module.exports = generateOverride;
