import { useEffect } from "react";
import Background from "../Background/Background";
import * as S from "./Style";
import { useNavigate } from "react-router-dom";

const Main = () => {
	const navigate = useNavigate();

	useEffect(() => {
		const titleElement = document.getElementsByTagName("title")[0];
		titleElement.innerHTML = `Check the recipe`;
	}, []);

	return (
		<>
			<Background>
				<S.ContentTitle>Select menu type</S.ContentTitle>
				<S.MenuContainer>
					<S.SelectMenu onClick={() => navigate("/rice")}>
						<S.MenuImg $url="/check-the-recipe/img/main/rice.svg" />
						<span>밥</span>
					</S.SelectMenu>
					<S.SelectMenu onClick={() => navigate("/soup")}>
						<S.MenuImg $url="/check-the-recipe/img/main/soup.svg" />
						<span>국&찌개</span>
					</S.SelectMenu>
					<S.SelectMenu onClick={() => navigate("/sidedish")}>
						<S.MenuImg $url="/check-the-recipe/img/main/sidedish.svg" />
						<span>반찬</span>
					</S.SelectMenu>
					<S.SelectMenu onClick={() => navigate("/onedish")}>
						<S.MenuImg $url="/check-the-recipe/img/main/onedish.svg" />
						<span>일품</span>
					</S.SelectMenu>
					<S.SelectMenu onClick={() => navigate("/dessert")}>
						<S.MenuImg $url="/check-the-recipe/img/main/dessert.svg" />
						<span>후식</span>
					</S.SelectMenu>
					<S.SelectMenu onClick={() => navigate("/etc")}>
						<S.MenuImg $url="/check-the-recipe/img/main/etc.svg" />
						<span>기타</span>
					</S.SelectMenu>
				</S.MenuContainer>
			</Background>
		</>
	);
};

export default Main;
