import React from 'react'
import './header.css'
import { Link } from 'react-router-dom';
import {PermIdentity, LocalMallOutlined} from '@mui/icons-material';

export default function Header() {
  return (
    <div className='header_wrapper'>
        <div className='appbar_wrapper'>
            <div className='appbar_left'>로고</div>
            <div className='appbar_center'><Link to="/">My Desserts</Link></div>
            <div className='appbar_right'><PermIdentity /> <LocalMallOutlined /></div>
        </div>
        <table className='table_nav' cellPadding={0} border={0}>
            <tbody>
                <tr>
                    <td>메인</td>
                    <td>메뉴1</td>
                    <td>메뉴2</td>
                </tr>
                <tr>
                    <td>메뉴3</td>
                    <td>메뉴4</td>
                    <td>Q&A</td>
                </tr>
            </tbody>
        </table>
        <div className='header_height'></div>
    </div>
  )
}
