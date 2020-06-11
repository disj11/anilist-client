import React, {FunctionComponent, useCallback, useState} from "react";
import {Autocomplete} from "@material-ui/lab";
import {Checkbox, TextField} from "@material-ui/core";
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
import CheckBoxIcon from '@material-ui/icons/CheckBox';
import {useQuery} from "@apollo/react-hooks";
import {GenresData} from "../../../models";
import {GENRES} from "../../../constants/queries";

const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
const checkedIcon = <CheckBoxIcon fontSize="small" />;

interface Option {
    label: string;
    group: string;
}

interface Props {
    onChange?: (selected: Array<Option>) => void;
}

const GenreSelect: FunctionComponent<Props> = ({onChange}) => {
    const [options, setOptions] = useState<Array<Option>>([]);
    const {loading} = useQuery<GenresData>(GENRES, {
        onCompleted: data => {
            const genreOptions: Array<Option> = data.genres.map(genre => {
                return {
                    label: genre,
                    group: 'GENRES',
                }
            });

            const tagOptions: Array<Option> = data.tags.map(tag => {
                return {
                    label: tag.name,
                    group: 'TAGS',
                }
            });

            setOptions(genreOptions.concat(tagOptions));
        }
    });

    const handleChange = useCallback((event, options) => {
        if (onChange) {
            onChange(options);
        }
    }, [])

    return (
        <Autocomplete
            multiple
            loading={loading}
            limitTags={2}
            options={options}
            groupBy={(option => option.group)}
            disableCloseOnSelect
            getOptionLabel={(option) => option.label}
            renderOption={(option, { selected }) => (
                <React.Fragment>
                    <Checkbox
                        icon={icon}
                        checkedIcon={checkedIcon}
                        style={{ marginRight: 8 }}
                        checked={selected}
                    />
                    {option.label}
                </React.Fragment>
            )}
            style={{ width: 360 }}
            renderInput={(params) => (
                <TextField {...params} variant="outlined" label="Genres" placeholder="Genres" />
            )}
            onChange={handleChange}
        />
    )
}

export default GenreSelect;