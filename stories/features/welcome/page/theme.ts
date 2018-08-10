/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this file,
 * You can obtain one at http://mozilla.org/MPL/2.0/. */

const theme = {
  welcomePage: {
    fontFamily: '"Poppins", sans-serif',
    alignItems: 'center',
    justifyContent: 'center'
  },
  waveBackground: {
    height: '-webkit-fill-available',
    width: '-webkit-fill-available'
  },
  panel: {
    backgroundColor: 'rgba(255,255,255,0.95)',
    borderRadius: '20px',
    boxShadow: '0 6px 12px 0 rgba(39, 46, 64, 0.2)',
    maxWidth: '600px',
    minHeight: '660px',
    padding: '60px'
  },
  panelWrapper: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '540px'
  },
  braveLogo: {
    width: '120px'
  },
  paymentsImage: {
    width: '230px'
  },
  importImage: {
    width: '215px'
  },
  shieldsImage: {
    width: '170px'
  },
  featuresImage: {
    width: '300px'
  },
  title: {
    fontFamily: '"Poppins", sans-serif',
    fontSize: '32px',
    color: '#212121',
    margin: '40px 0 0'
  },
  text: {
    fontFamily: '"Muli", sans-serif',
    fontSize: '18px',
    color: '#76777A',
    lineHeight: '34px',
    textAlign: 'center',
    margin: '20px 0'
  },
  mainButton: {
    textTransform: 'uppercase'
  },
  sideButton: {
    textTransform: 'uppercase',
    fontWeight: '500'
  },
  arrow: {
    display: 'inline-block',
    verticalAlign: 'middle'
  },
  content: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    flex: '1',
    marginBottom: '40px'
  },
  skip: {
    color: '#76777A',
    textDecoration: 'underline'
  },
  footer: {
    gridGap: '0',
    padding: '0'
  },
  footerColumnLeft: {
    alignItems: 'center',
    justifyContent: 'flex-start'
  },
  footerColumnCenter: {
    alignItems: 'center',
    justifyContent: 'center'
  },
  footerColumnRight: {
    alignItems: 'center',
    justifyContent: 'flex-end'
  },
  bulletActive: {
    color: '#FB542B',
    hoverColor: '#FB542B',
    padding: '0 7px',
    fontSize: '40px'
  },
  bullet: {
    color: '#7D7D7D',
    hoverColor: '#FB542B',
    padding: '0 7px',
    fontSize: '40px'
  }
} as any

export default theme
