import { ButtonMobile } from "@alfalab/core-components/button/mobile";

import { Typography } from "@alfalab/core-components/typography";

import image1 from "./assets/1.png";
import { LS, LSKeys } from "./ls";
import { appSt } from "./style.css";
import { Gap } from "@alfalab/core-components/gap";
import { LockOpenLineMIcon } from "@alfalab/icons-glyph/LockOpenLineMIcon";

const deepLink =
  "alfabank://sdui_screen?screenName=InvestmentLongread&fromCurrent=true&shouldUseBottomSafeArea=true&shouldUseBottomSafeArea=true&endpoint=v1/invest-main-screen-view/investment-longread/55160%3flocation=AM_WN_MAIN%26campaignCode=ONB_ME2ME_S1";

const Redirect = () => {
  window.location.href = deepLink;

  return null;
};

export const App = () => {
  const submit = () => {
    window.gtag("event", "6719_get_sub", {
      variant_name: "6719_2",
    });

    LS.setItem(LSKeys.ShowThx, true);
  };

  if (LS.getItem(LSKeys.ShowThx, false)) {
    return <Redirect />;
  }

  return (
    <>
      <div className={appSt.container}>
        <img
          src={image1}
          alt="Картинка Альфа-Смарт"
          style={{ borderRadius: "16px" }}
        />

        <Gap size={16} />

        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <Typography.Title tag="h1" view="small">
            На карте снова нет денег?
          </Typography.Title>
        </div>

        <Gap size={16} />

        <Typography.Text>
          Освойте за 3 минуты навык, который избавит от неловких оплат и
          сэкономит время на переводах между банками.
        </Typography.Text>

        <Gap size={16} />

        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 24,
            backgroundColor: "#F8F8F8",
            padding: "16px 24px",
            borderRadius: "16px",
          }}
        >
          <LockOpenLineMIcon />
          <Typography.Text view="primary-small">
            Ваш новый навык — автоплатежи
          </Typography.Text>
        </div>

        <Gap size={40} />

        <Typography.Title tag="h1" view="xsmall">
          Как это работает
        </Typography.Title>

        <Gap size={16} />

        <div style={{ display: "flex", gap: "16px", alignItems: "center" }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              padding: "16px",
              border: "2px dashed grey",
              borderRadius: "50%",
              width: "50px",
              height: "50px",
            }}
          >
            <Typography.Text view="primary-medium" weight="bold">
              1
            </Typography.Text>
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <Typography.Text view="primary-small">
              Откройте приложение и найдите раздел «Автоплатежи»
            </Typography.Text>
          </div>
        </div>
        <Gap size={12} />
        <div style={{ display: "flex", gap: "16px", alignItems: "center" }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              padding: "16px",
              border: "2px dashed grey",
              borderRadius: "50%",
              width: "50px",
              height: "50px",
            }}
          >
            <Typography.Text view="primary-large" weight="bold">
              2
            </Typography.Text>
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <Typography.Text view="primary-small">
              Настройте автопополнение: укажите сумму и частоту
            </Typography.Text>
          </div>
        </div>
        <Gap size={12} />
        <div style={{ display: "flex", gap: "16px", alignItems: "center" }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              padding: "16px",
              border: "2px dashed grey",
              borderRadius: "50%",
              width: "50px",
              height: "50px",
            }}
          >
            <Typography.Text view="primary-large" weight="bold">
              3
            </Typography.Text>
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <Typography.Text view="primary-small">
              Создайте автоплатёж — деньги будут приходить автоматически
            </Typography.Text>
          </div>
        </div>

        <Gap size={32} />

        <Typography.Text>
          Поздравляем! Остался последний шаг — создайте автоплатёж на 250 ₽ с
          любой удобной периодичностью.
        </Typography.Text>
      </div>

      <Gap size={96} />

      <div className={appSt.bottomBtn}>
        <ButtonMobile block view="primary" href={deepLink} onClick={submit}>
          Закрепить скил
        </ButtonMobile>
      </div>
    </>
  );
};
