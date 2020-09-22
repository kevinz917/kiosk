import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { SET_TAGS } from "../../utils/redux/reducers/record";

let tagCSS = "inline-block p-3 bg-gray-300 mb-1 mr-1";

const filterTags = {
  small: { value: false, keyword: "small" },
  medium: { value: false, keyword: "medium" },
  large: { value: false, keyword: "large" },
};

const Restaurantnav = (props) => {
  const [tags, setTags] = useState(filterTags);
  const dispatch = useDispatch();

  const setTagPolarity = (tagName) => {
    const newState = Object.assign({}, tags);
    newState[tagName].value = !tags[tagName].value;
    setTags(newState);
    console.log("Setting tag polarity");
    dispatch(SET_TAGS(tags));
  };

  return (
    <div style={{ width: "400px" }} className="shadow-md h-screen p-8">
      <div className="text-xl font-semibold">Tag selector</div>
      <div className="flex flex-row">
        {Object.keys(tags).map((keyName, i) => (
          <div>
            {tags[keyName].value == true ? (
              <div onClick={() => setTagPolarity(keyName)} className={tagCSS}>
                <div>
                  {tags[keyName].keyword}, {tags[keyName].value.toString()}
                </div>
              </div>
            ) : null}
          </div>
        ))}
      </div>
      <br />
      <hr />
      <br />
      <div>
        {Object.keys(tags).map((keyName, i) => (
          <div>
            {tags[keyName].value == false ? (
              <div onClick={() => setTagPolarity(keyName)} className={tagCSS}>
                {tags[keyName].keyword}, {tags[keyName].value.toString()}
              </div>
            ) : null}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Restaurantnav;
