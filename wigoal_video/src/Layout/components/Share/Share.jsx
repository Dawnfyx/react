import React from 'react';
import {Modal, message} from "antd";

import share_facebook from "../../../assets/img/share_facebook.png";
import share_twitter from "../../../assets/img/share_twitter.png";
import share_link from "../../../assets/img/share_link.png";

import './Share.less'

const ShareContainer = (props) => {
    const {isModalOpen, setIsModalOpen} = props;

    const handleModalOk = () => {
        setIsModalOpen(false);
    };

    const handleModalCancel = () => {
        setIsModalOpen(false);
    };

    // facebook
    const shareFacebook = () => {
        window.open('http://www.facebook.com/sharer.php?u=' + encodeURIComponent(window.location.origin + '/'));
    }

    // twitter
    const shareTwitter = () => {
        window.open('https://twitter.com/share?text=' + encodeURIComponent(document.title) + '&url=' + encodeURIComponent(window.location.origin + '/'));
    }

    const [messageApi, contextHolder] = message.useMessage();
    const key = 'updatable';
    const openMessage = () => {
        messageApi.open({
            key,
            type: 'loading',
            content: 'Loading...',
        });
        setTimeout(() => {
            messageApi.open({
                key,
                type: 'success',
                content: 'You have copied the share link to the clipboard!',
                duration: 2,
            });
        }, 1000);
    };
    const copy = () => {

        // 创建模拟 输入框
        var cInput = document.createElement("input");
        // 当前网址
        cInput.value = window.location.href;
        document.body.appendChild(cInput);
        cInput.select(); // 选取文本框内容

        // 执行浏览器复制命令
        // 复制命令会将当前选中的内容复制到剪切板中（这里就是创建的input标签）
        // Input要在正常的编辑状态下原生复制方法才会生效
        document.execCommand("copy");

        // 复制成功后再将构造的标签 移除
        document.body.removeChild(cInput);
        openMessage();
    };

    return (
        <Modal className="share_box" footer={null} open={isModalOpen} onOk={handleModalOk} onCancel={handleModalCancel}>
            <h1>
                Share
            </h1>
            <span>
                <div className='share_icon share_facebook'>
                    <img src={share_facebook} alt="" onClick={shareFacebook} width='36' height='36' />
                </div>

                <div className='share_icon share_twitter'>
                    <img src={share_twitter} alt="" onClick={shareTwitter} width='36' height='36' />
                </div>

                <div className='share_icon share_link'>
                    <img src={share_link} alt="" onClick={copy} width='36' height='36' />
                </div>
            </span>

            {contextHolder}
        </Modal>
    )
}

export default ShareContainer;