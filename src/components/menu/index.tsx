import {Button} from "../buttons/button/index.tsx";
import {StylesForButton} from "../buttons/button/types.ts";
import {Icon} from "../icon/index.tsx";
import "./styles.css"

export const Menu=()=>{
    return <div className='menu-container'>
        <div className='menu-small'>
            <div className='menu-small-top-buttons'>
                <Button style={StylesForButton.onlyIcon} icon={<Icon nameForIcon='logo' />}/>
                <Button style={StylesForButton.onlyIcon} icon={<Icon nameForIcon='company' />}/>
                <Button style={StylesForButton.onlyIcon} icon={<Icon nameForIcon='search' />}/>
            </div>
            <div className='menu-small-bottom-buttons'>
                <Button style={StylesForButton.onlyIcon} icon={<Icon nameForIcon='settings' />}/>
                <Button style={StylesForButton.onlyIcon} icon={<Icon nameForIcon='signOut' />}/>
            </div>
        </div>
        <div className='menu-big'>
            <div className='menu-big-header'>
                <h3 className='menu-big-header-title'>Oak Tree Cemetery</h3>
                <h2 className='menu-big-header-subtitle'>Process Manager</h2>
            </div>
            <div className='menu-big-options'>
            <Button style={StylesForButton.primary} icon={<Icon nameForIcon='company'/>} text='Organizations'/>
            <Button style={StylesForButton.outline} icon={<Icon nameForIcon='contractor'/>} text='Contractors'/>
            <Button style={StylesForButton.outline} icon={<Icon nameForIcon='account'/>} text='Clients'/>
        </div>
        </div>
    </div>
}