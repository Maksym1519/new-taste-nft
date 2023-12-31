import "../style.scss";
import Cw from "./walletModal.module.scss";
import Close from '../images/close.svg';
import Bg from '../images/walletBg.svg';
import BgIcon from '../images/walletIcon.svg';
import BgNumber from '../images/wallet-number-circle.png';
import { WalletModalFinish } from "./WalletModalFinish";
import React, { useState } from 'react';


export const WalletModal = ({closeModal}) => {
    const [isWalletOpen, setWalletModalOpen] = useState(false)
    const openWalletFinish = () => {
        setWalletModalOpen(true)
    }
    return (
       <div>
        {
         isWalletOpen ? (<WalletModalFinish closeModal={closeModal}/>): (   
        <div className={Cw.wrapper}>
            <div className={Cw.container}>
             <h3 className={Cw.title}>Connecting wallet</h3>
             <div className={Cw.itemsWrapper}>
                 <div className={Cw.item}>
                    <div className={Cw.itemNumber}>
                     <img src={BgNumber} alt="bg" className={Cw.bgNumber} />
                     <span className={Cw.itemNumber__number}>1.</span>
                    </div>
                   <div className={Cw.item__imgWrapper}>
                    <img src={Bg} alt="img" />
                    <img src={BgIcon} alt="icon" className={Cw.item__icon} />
                   </div>
                   <p className={Cw.item__description}>Описание что нужно сделать</p>
                 </div>
                 <div className={Cw.item}>
                 <div className={Cw.itemNumber}>
                     <img src={BgNumber} alt="bg" className={Cw.bgNumber} />
                     <span className={Cw.itemNumber__number}>2.</span>
                    </div>
                   <div className={Cw.item__imgWrapper}>
                    <img src={Bg} alt="img" />
                    <img src={BgIcon} alt="icon" className={Cw.item__icon}/>
                   </div>
                   <p className={Cw.item__description}>Описание что нужно сделать</p>
                 </div>
                 <div className={Cw.item}>
                 <div className={Cw.itemNumber}>
                     <img src={BgNumber} alt="bg" className={Cw.bgNumber} />
                     <span className={Cw.itemNumber__number}>3.</span>
                    </div>
                   <div className={Cw.item__imgWrapper}>
                    <img src={Bg} alt="img" />
                    <img src={BgIcon} alt="icon" className={Cw.item__icon}/>
                   </div>
                   <p className={Cw.item__description}>Описание что нужно сделать</p>
                 </div>
               </div>
               <button className={Cw.button} onClick={openWalletFinish}>Connect wallet</button>
            </div>
            <img src={Close} alt="close" className={Cw.close} onClick={closeModal}/>
            {isWalletOpen && (
              <WalletModalFinish closeModal={closeModal}/>
            )}
        </div>
        )}
</div>
    )
}