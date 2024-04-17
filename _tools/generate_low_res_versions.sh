#!/bin/bash

# Install tools if missing
if ! command -v convert &> /dev/null; then
    echo "ImageMagick is not installed. Installing..."
    sudo apt update
    sudo apt install imagemagick -y
fi
# Set the input directory or use the current directory if no argument is provided
input_dir="${1:-.}"

# Find all image files in the input directory and its subdirectories
find "$input_dir" -type f \( -iname "*.png" -o -iname "*.jpg" -o -iname "*.jpeg" -o -iname "*.gif" \) | while read -r image; do
    # Get the filename, filename without extension, extension, and relative path
    filename=$(basename -- "$image")
    filename_noext="${filename%.*}"
    extension="${filename##*.}"
    relative_path=${image#"$input_dir"}

    # Skip if the file is an SVG or the filename already contains "_lr"
    if [ "$extension" == "svg" ] || [[ "$filename_noext" == *"_lr"* ]]; then
        continue
    fi

    # Set the output directory for the resized image in the same subfolder
    output_dir="$input_dir/${relative_path%/*}"  # Remove the last component (filename) to get the directory
    mkdir -p "$output_dir"  # Create the output directory if it doesn't exist

    # Set the output path for the resized image
    output_path="$output_dir/${filename_noext}_lr.${extension}"

    # Skip if the _lr version already exists
    if [ -e "$output_path" ]; then
        continue
    fi

    # Get the dimensions of the original image
    width=$(identify -format "%w" "$image")
    height=$(identify -format "%h" "$image")

    # Set the maximum dimension
    max_dimension=100

    # Check if the original dimensions are larger than the maximum dimension
    if ((width > max_dimension || height > max_dimension)); then
        convert "$image" -resize "$max_dimension"x"$max_dimension" "$output_path"
    else
        # If the original dimensions are smaller, just copy the original file
        cp -f "$image" "$output_path"
    fi
done

echo "Image resizing complete."
