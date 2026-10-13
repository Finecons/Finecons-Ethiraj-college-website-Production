import React, { useState } from "react";
import { Grid, IconButton, Box } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { motion, AnimatePresence } from "framer-motion";
import CustomSearchFeildAll from "../../Components/SearchField/CustomSearchFeildAll";
// import CustomSearchFeildAll from "./CustomSearchFeildAll"; // your custom component

const SearchWithTransition = ({ searchQuery, onSearchChange }) => {
  const [open, setOpen] = useState(false);

  return (
    <Grid>
      <Grid item size={{xs:12, sm:2}}>
        <IconButton onClick={() => setOpen(!open)}>
          <SearchIcon />
        </IconButton>
      </Grid>

      {/* Animated Search Field */}
      <Grid item size={{xs:12, sm:2}}>
        <AnimatePresence>
          {open && (
            <motion.div
              key="search"
              initial={{ width: 0, opacity: 0, x: -50 }}
              animate={{ width: "100%", opacity: 1, x: 0 }}
              exit={{ width: 0, opacity: 0, x: -50 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
            >
              <Box>
                <CustomSearchFeildAll
                  fullWidth
                  value={searchQuery}
                  onChange={(e) => onSearchChange(e.target.value)}
                />
              </Box>
            </motion.div>
          )}
        </AnimatePresence>
      </Grid>
    </Grid>
  );
};

export default SearchWithTransition;
