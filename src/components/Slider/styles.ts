import styled from 'styled-components'

export const SliderStyles = styled.div`
  overflow: hidden;
  display: flex;
  align-items: center;
  width: 100%;
  height: calc((100vw - 120px) * 0.28);
  position: relative;
  border-radius: 12px;
  background-color: #ffff;
`

export const SliderMainImageStyled = styled.div<{ $imgIndex: number }>`
  height: 100%;
  cursor: pointer;
  display: flex;
  align-items: flex-end;
  position: absolute;
  overflow: hidden;
  border-radius: 12px;
  ${({ $imgIndex }) =>
    $imgIndex <= 11 && $imgIndex >= -11
      ? 'transition: all 0.3s ease;'
      : 'display:none;'}
  ${({ $imgIndex }) =>
    $imgIndex === 0
      ? `left: 2.5%; width: 50%;`
      : $imgIndex === -16
      ? `left: -232.5%; width: 14.5%;`
      : $imgIndex === -15
      ? `left: -217.5%; width: 14.5%;`
      : $imgIndex === -14
      ? `left: -202.5%; width: 14.5%;`
      : $imgIndex === -13
      ? `left: -192.5%; width: 14.5%;`
      : $imgIndex === -12
      ? `left: -177.5%; width: 14.5%;`
      : $imgIndex === -11
      ? `left: -162.5%; width: 14.5%;`
      : $imgIndex === -10
      ? `left: -147.5%; width: 14.5%;`
      : $imgIndex === -9
      ? `left: -132.5%; width: 14.5%;`
      : $imgIndex === -8
      ? `left: -117.5%; width: 14.5%;`
      : $imgIndex === -7
      ? `left: -102.5%; width: 14.5%;`
      : $imgIndex === -6
      ? `left: -87.5%; width: 14.5%;`
      : $imgIndex === -5
      ? `left: -72.5%; width: 14.5%;`
      : $imgIndex === -4
      ? `left: -57.5%; width: 14.5%;`
      : $imgIndex === -3
      ? `left: -42.5%; width: 14.5%;`
      : $imgIndex === -2
      ? `left: -27.5%; width: 14.5%;`
      : $imgIndex === -1
      ? `left: -12.5%; width: 14.5%;`
      : $imgIndex === 1
      ? `left: 53%; width: 14.5%;`
      : $imgIndex === 2
      ? `left: 68%; width: 14.5%;`
      : $imgIndex === 3
      ? `left: 83%; width: 14.5%;`
      : $imgIndex === 4
      ? `left: 98%; width: 14.5%;`
      : $imgIndex === 5
      ? `left: 113%; width: 14.5%;`
      : $imgIndex === 6
      ? `left: 128%; width: 14.5%;`
      : $imgIndex === 7
      ? `left: 143%; width: 14.5%;`
      : $imgIndex === 8
      ? `left: 168%; width: 14.5%;`
      : $imgIndex === 9
      ? `left: 183%; width: 14.5%;`
      : $imgIndex === 10
      ? `left: 198%; width: 14.5%;`
      : $imgIndex === 10
      ? `left: 198%; width: 14.5%;`
      : $imgIndex === 11
      ? `left: 213%; width: 14.5%;`
      : $imgIndex === 12
      ? `left: 228%; width: 14.5%;`
      : $imgIndex === 13
      ? `left: 243%; width: 14.5%;`
      : $imgIndex === 14
      ? `left: 282%; width: 14.5%;`
      : $imgIndex === 15
      ? `left: 297%; width: 14.5%;`
      : $imgIndex === 16
      ? `left: 312%; width: 14.5%;`
      : ``};
`
export const ContentBox2Styled = styled.div`
  height: 100%;
  overflow: hidden;
  width: 100%;
  overflow: hidden;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
`
export const SliderImageStyled = styled.div`
  max-width: 100%;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: flex-end;
  position: relative;
  overflow: hidden;
`
export const ContentBoxStyled = styled.div`
  height: 100%;
  width: 100%;
  overflow: hidden;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
`
export const ImageStyled = styled.img`
  position: absolute;
  width: auto;
  height: 100%;
`
export const ButtonStyled = styled.button<{ $isLefSide?: boolean }>`
  z-index: 2;
  position: absolute;
  /* visibility: hidden; */
  width: 30px;
  height: 30px;
  border: 1px solid #0000;
  border-radius: 15px;
  background-color: #ffff;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  ${({ $isLefSide }) => ($isLefSide ? 'left: 3%;' : 'right: 3%;')}
`
export const UlStyled = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
`
export const LiStyled = styled.li<{ $active?: boolean }>`
  list-style: none;
  display: flex;
  width: 7px;
  height: 7px;
  justify-content: center;
  align-items: center;
  height: min-content;
  cursor: pointer;
  overflow: hidden;
  ${({ $active }) => ($active ? ' width: 12px; height: 12px;' : '')}
  > button {
    cursor: pointer;
    width: 7px;
    height: 7px;
    background-color: black;
    ${({ $active }) => ($active ? ' width: 12px; height: 12px;' : '')}
  }
`
