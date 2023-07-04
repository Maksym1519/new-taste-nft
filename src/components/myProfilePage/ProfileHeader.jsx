import '../../style.scss';
import Hp from './profileHeader.module.scss';
import Logo from '../../images/header-logo.svg';
import SearchIcon from '../../images/header-search.svg';
import { Button } from '../Button';
import { EndingTime } from './EndingTimeModal';
import { CreateArtModal } from './CreateArtModal';
import ProfileAva from '../../images/profile-avatar-circ.png';
import ProfileLogo from '../../images/profile-logo.svg';
import Arrow from '../../images/profile-arrow.svg'
import React, { useState, useEffect } from 'react';
//import { MyProfile } from '../pages/MyProfilePage';

export const ProfileHeader = () => {
  const [isOpenMenu, setOpenMenu] = useState(false)
  const [buttonText, setButtonText] = useState('+ Add artwork');
  const [isTimeModalOpen, setTimeModalOpen] = useState(false);
  //--------------------------------------------------------------------------------------
    const handleMenu = () => {
    setOpenMenu(!isOpenMenu)
  };
  const menuStyle = {
    marginTop: isOpenMenu ? '122px' : '0'
  };
  useEffect(() => {
    const initialButtonText = '+ Add artwork';
    setTimeout(() => {
      setButtonText(initialButtonText);
    }, 0);
  }, []);
  const handleOpenTimeModal = () => {
    setTimeModalOpen(true)
    };
  const handleCloseTimeModal = () => {
    setTimeModalOpen(false)
  };
  
 
  //--------------------------------------------------------------------------------------------
      return (
        <div className={Hp.wrapper}>
          {isTimeModalOpen &&<div className={Hp.overlay}></div>}
          <img src={Logo} alt="logo" className="logo" />
          <div className={Hp.search}>
          <img src= {SearchIcon} alt="search" />
          <input type="search" className={Hp.search__input} placeholder='Search for ...'/>
          </div>
          <Button handleClick={handleOpenTimeModal} buttonText={buttonText} />
          <div className={Hp.profile__wrapper} style={menuStyle}>
             <div className={Hp.profile}>
            <img src={ProfileAva} alt="ava" />
         <div className={Hp.profile__info}>
          <span className={Hp.profile__info__userName}>User Name</span>
           <div className={Hp.profile__balance}>
          <span className={Hp.profile__info__userId}>@username</span>
           <span className={Hp.profile__balance__text}>Balance:</span>
           <img src={ProfileLogo} alt="logo" className={Hp.profile__balance__logo} />
           <span className={Hp.profile__balance__sum}>1,5M</span>
          </div>
          </div>
          <img src={Arrow} alt="arrow" className={Hp.profile__arrow} onClick={handleMenu} id='arrow' />
         </div>
         {isOpenMenu && (
         <div className={Hp.profile__menu}>
          <a className={Hp.profile__menu_lightColored}>Address: 0c0xcx1cx606g4516x51g1...</a>
          <a className={Hp.profile__menu__item}>My profile</a>
          <a className={Hp.profile__menu__item}>Balance settings</a>
          <a className={Hp.profile__menu_redish}>Log out</a>
         </div>
          )}
        </div>
        {isTimeModalOpen && <CreateArtModal openModal={handleOpenTimeModal} closeModal={handleCloseTimeModal} />}
        </div>
    )
}