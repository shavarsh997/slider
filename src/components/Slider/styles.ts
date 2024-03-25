import styled from 'styled-components'
import { devices } from '../../assets/constant'

export const SliderStyles = styled.div`
  overflow: hidden;
  display: flex;
  align-items: center;
  width: 100%;
  height: calc((1920px) * 0.28);
  position: relative;
  border-radius: 12px;
  background-color: #ffff;
  max-width: 1920px;
  @media ${devices['3xl']} {
    height: calc((100vw - 120px) * 0.28);
  }
  @media ${devices['2xl']} {
    height: calc((100vw - 120px) * 0.45);
  }
  @media ${devices['md']} {
    height: calc((100vw - 40px) * 0.57);
  }
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
      ? 'transition: all 0.5s ease;'
      : 'display:none;'}
  ${({ $imgIndex }) =>
    $imgIndex === 0
      ? `left: 2.5%; width: 50%;`
      : $imgIndex > -16 && $imgIndex < 0
      ? `left: ${2.5 + $imgIndex * 15}%; width: 14.5%;`
      : $imgIndex < 16 && $imgIndex > 0
      ? `left: ${38 + $imgIndex * 15}%; width: 14.5%;`
      : ``};
  @media ${devices['2xl']} {
    max-width: 1400px;
    ${({ $imgIndex }) =>
      $imgIndex === 0
        ? `left: 2.5%; width: 80%;`
        : $imgIndex > -16 && $imgIndex < 0
        ? `left: ${2.5 + $imgIndex * 15}%; width: 14.5%;`
        : $imgIndex < 16 && $imgIndex > 0
        ? `left: ${68 + $imgIndex * 15}%; width: 14.5%;`
        : ``};
  }
  @media ${devices['md']} {
    ${({ $imgIndex }) =>
      $imgIndex === 0
        ? `left: 0%; width: 100%;`
        : $imgIndex > -16 && $imgIndex < 0
        ? `left: ${$imgIndex * 100}%; width: 100%;`
        : $imgIndex < 16 && $imgIndex > 0
        ? `left: ${$imgIndex * 100}%; width: 100%;`
        : ``};
  }
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
export const TextBoxStyled = styled.div`
  position: relative;
  z-index: 2;
  max-width: 100%;
  width: 80%;
  &::after {
    content: '';
    background: #2f3e4f;
    opacity: 0.4;
    position: absolute;
    filter: blur(40px);
    width: 100%;
    height: 180%;
    z-index: -1;
    left: -10%;
    top: -40%;
  }
`
export const TitleStyled = styled.p<{ $active?: boolean }>`
  margin: 10px 0;
  font-size: ${({ $active }) => ($active ? '34px' : '20px')};
  transition: all 0.4s ease;
  width: ${({ $active }) => (!$active ? '100%' : '40%')};
  color: #ffff;
  @media ${devices['lg']} {
    font-size: ${({ $active }) => ($active ? '28px' : '18px')};
  }
  @media ${devices['md']} {
    font-size: 28px;
    width: 40%;
  }
`
export const DescriptionStyled = styled.p<{ $active?: boolean }>`
  transition: all 0.4s ease;
  margin: 14px 0;
  font-size: ${({ $active }) => ($active ? '20px' : '1px')};
  opacity: ${({ $active }) => ($active ? '1' : '0')};
  width: 50%;
  color: #ffff;
  @media ${devices['lg']} {
    font-size: ${({ $active }) => ($active ? '16px' : '1px')};
  }
  @media ${devices['md']} {
    font-size: 16px;
    opacity: 1;
  }
`
export const ButtonStyled = styled.button<{ $isLefSide?: boolean }>`
  z-index: 2;
  position: absolute;
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
export const SubmitButton = styled.button`
  z-index: 2;
  background-color: #ffff;
  width: 50px;
  border-radius: 8px;
  font-size: 16px;
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
