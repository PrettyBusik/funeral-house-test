import {Button} from "../components/buttons/button/index.tsx";
import {StylesForButton} from "../components/buttons/button/types.ts";
import {Icon} from "../components/icon/index.tsx";
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
        <div className='menu-big'></div>
    </div>
}