import React, { Fragment } from 'react'

import { footerLinks, footerImages } from '@/common/local-data'

import { FooterWrapper, FooterLeft, FooterRight } from './style'

export default function MSFooter() {
  return (
    <FooterWrapper>
      <div className="footer wrap-v2">
        <FooterLeft className='footer-left'>
          <div className="footer-left-select">
            {
              footerLinks.map((item, index) => {
                return (
                  <Fragment key={item.title}>
                    <a
                      href={item.link}
                      className='footer-left-item'
                    >
                      {
                        item.title
                      }
                    </a>
                    {footerLinks.length - 1 !== index && <span className='footer-left-cut-line'>|</span>}
                  </Fragment>
                )
              })
            }
          </div>
          <div className="footer-left-info">
            <div className="footer-left-info-copyright">網易公司版權所有©1997-2022</div>
            <div className="footer-left-info-copy-num">杭州樂讀科技有限公司運營：浙網文[2021] 1186-054號</div>
          </div>
          <div className="footer-left-detail">
            <div>粵B2-20090191-18  工業和信息化部備案管理系統網站</div>
            <div>浙公網安備 33010902002564號</div>
          </div>
        </FooterLeft>
        <FooterRight className="footer-right">
          {
            footerImages.map(item => {
              return (
                <li className="item" key={item.link}>
                  <a className="link" href={item.link} rel="noopener noreferrer" target="_blank"> </a>
                  <span className="title">{item.title}</span>
                </li>
              )
            })
          }
        </FooterRight>
      </div>
    </FooterWrapper>
  )
}
