import { useContext, useEffect } from "preact/hooks";
import * as S from "./UserMenu.styles";

import * as thunks from "@thunks";
import { SessionContext } from "@context";

function UserMenu() {
    const [{ user }, dispatch] = useContext(SessionContext);

    useEffect(() => {
        dispatch(thunks.loadSession());
    }, []);

    return (
        user && (
            <S.UserMenu>
                <S.UserMenuAvatar
                    width={75}
                    height={75}
                    alt="avatar"
                    src={user.avatar}
                />
                <S.UserMenuDetails>
                    {user.firstName} {user.lastName}
                </S.UserMenuDetails>
            </S.UserMenu>
        )
    );
}

export default UserMenu;
