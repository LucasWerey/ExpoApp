#!/bin/bash

RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m'

if [ -z "$1" ]; then
  echo -e "${RED}Please provide a component name.${NC}"
  exit 1
fi

COMPONENT_NAME=$1
FILE_PATH="./app/components/${COMPONENT_NAME}/index.tsx"
INDEX_FILE="./app/components/index.ts"

echo -e "${YELLOW}Choose the type of folder:${NC}"
options=("Single" "Multiple")
select FOLDER_TYPE in "${options[@]}"
do
  case $FOLDER_TYPE in
    "Single")
      mkdir -p "$(dirname "$FILE_PATH")"

      cat <<EOL > $FILE_PATH
import React from "react";

type ${COMPONENT_NAME}Props = {};

const ${COMPONENT_NAME}: React.FC<${COMPONENT_NAME}Props> = ({}) => ();

export default ${COMPONENT_NAME};
EOL

      echo "export { default as ${COMPONENT_NAME} } from \"./${COMPONENT_NAME}\";" >> $INDEX_FILE

      echo -e "${GREEN}Component ${COMPONENT_NAME} created at ${FILE_PATH}${NC}"
      echo -e "${GREEN}Component ${COMPONENT_NAME} added to ${INDEX_FILE}${NC}"
      break
      ;;
    "Multiple")
      mkdir -p "./app/components/${COMPONENT_NAME}"

      while true; do
        echo -e "${YELLOW}Enter the name of the component (or type 'done' to finish):${NC}"
        read SUB_COMPONENT_NAME

        if [ "$SUB_COMPONENT_NAME" == "done" ]; then
          break
        fi

        SUB_FILE_PATH="./app/components/${COMPONENT_NAME}/${SUB_COMPONENT_NAME}.tsx"

        cat <<EOL > $SUB_FILE_PATH
import React from "react";

type ${SUB_COMPONENT_NAME}Props = {};

const ${SUB_COMPONENT_NAME}: React.FC<${SUB_COMPONENT_NAME}Props> = ({}) => ();

export default ${SUB_COMPONENT_NAME};
EOL

        echo "export { default as ${SUB_COMPONENT_NAME} } from \"./${COMPONENT_NAME}/${SUB_COMPONENT_NAME}\";" >> $INDEX_FILE

        echo -e "${GREEN}Sub-component ${SUB_COMPONENT_NAME} created at ${SUB_FILE_PATH}${NC}"
        echo -e "${GREEN}Sub-component ${SUB_COMPONENT_NAME} added to ${INDEX_FILE}${NC}"
      done
      break
      ;;
    *)
      echo -e "${RED}Invalid option. Please choose either 'Single' or 'Multiple'.${NC}"
      ;;
  esac
done
