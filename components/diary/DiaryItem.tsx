import React from "react";
import {
  DiaryContentStyle,
  DiaryMainStyle,
  DiaryTitleStyle,
} from "../../styles/DiaryStyle";
import { ButtonStyle } from "../../styles/GlobalStyle";

export type DiaryItemProps = {
  data: any;
};

export default function DiaryItem(props: DiaryItemProps) {
  const { data } = props;

  const diaryDate: string = data?.data.content.diaryDate;
  const diaryDateFormat = diaryDate.slice(0, 10);

  return (
    <form>
      <DiaryTitleStyle>
        {/* title */}
        <input type="text" value={data?.data.content.title} readOnly />
      </DiaryTitleStyle>

      {/* contents container */}
      <DiaryMainStyle>
        <div className="main-container">
          <div className="upload-btn">
            <img
              className={`upload-image`}
              src={data?.data.content.image}
              alt="diary-image"
            />
          </div>
        </div>
      </DiaryMainStyle>
      <DiaryContentStyle>
        <div>
          <input
            type="date"
            value={diaryDateFormat}
            min="1998-02-20"
            max={new Date().toJSON().slice(0, 10)}
            readOnly
          />
          <div>
            <ButtonStyle>수정</ButtonStyle>
            <ButtonStyle>삭제</ButtonStyle>
          </div>
        </div>
        <div className="content-container">
          <textarea value={data?.data.content.content} readOnly />
        </div>
      </DiaryContentStyle>
    </form>
  );
}